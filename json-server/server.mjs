// json-server/server.mjs
import jsonServer from 'json-server';
import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { fileURLToPath } from 'url';

// Получаем __dirname в ES модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'public')
});

// Настройка multer для загрузки файлов
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'public/uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  }
});

// Задержка для имитации реального API
server.use(async (req, res, next) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  next();
});

// Эндпоинт для загрузки изображений
server.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  const imageUrl = `/uploads/${req.file.filename}`;
  
  const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8'));
  if (!db.uploads) db.uploads = {};
  
  const fileInfo = {
    id: Date.now(),
    originalName: req.file.originalname,
    filename: req.file.filename,
    url: imageUrl,
    size: req.file.size,
    uploadedAt: new Date().toISOString()
  };
  
  db.uploads[fileInfo.id] = fileInfo;
  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(db, null, 2));
  
  res.json({
    success: true,
    file: fileInfo
  });
});

// Эндпоинт для получения изображений по секциям
server.get('/sections/:section/images', (req, res) => {
  const imagesPath = path.join(__dirname, 'public/uploads');
  
  if (!fs.existsSync(imagesPath)) {
    return res.json({ section: req.params.section, images: [] });
  }
  
  const files = fs.readdirSync(imagesPath);
  const sectionFiles = files.filter(file => file.startsWith(req.params.section));
  
  res.json({
    section: req.params.section,
    images: sectionFiles.map(file => ({
      url: `/uploads/${file}`,
      filename: file
    }))
  });
});

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on http://localhost:${PORT}`);
  console.log(`📁 Uploads directory: ${path.join(__dirname, 'public/uploads')}`);
  console.log(`📸 Upload endpoint: POST http://localhost:${PORT}/upload`);
  console.log(`📋 API endpoint: GET http://localhost:${PORT}/sections`);
});