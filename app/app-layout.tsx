console.log(
	'%c\n' +
		'╔══════════════════════════════════════════════════════════╗\n' +
		'║                                                          ║\n' +
		'║   ██████╗ ███████╗███████╗██╗   ██╗███╗   ███╗███████╗   ║\n' +
		'║   ██╔══██╗██╔════╝██╔════╝██║   ██║████╗ ████║██╔════╝   ║\n' +
		'║   ██████╔╝█████╗  ███████╗██║   ██║██╔████╔██║█████╗     ║\n' +
		'║   ██╔══██╗██╔══╝  ╚════██║██║   ██║██║╚██╔╝██║██╔══╝     ║\n' +
		'║   ██║  ██║███████╗███████║╚██████╔╝██║ ╚═╝ ██║███████╗   ║\n' +
		'║   ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝   ║\n' +
		'║                                                          ║\n' +
		'╚══════════════════════════════════════════════════════════╝\n',
	'color: #ff6b6b; font-size: 14px; font-weight: bold; font-family: monospace;'
);

const gradientText = '✨ ДОБРО ПОЖАЛОВАТЬ В МОЁ РЕЗЮМЕ ✨';
console.log(
	`%c${gradientText}`,
	`color: #ff6b6b; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); letter-spacing: 2px;`
);

console.log(
	'%c📋 ИНФОРМАЦИЯ О РАЗРАБОТЧИКЕ %c\n\n' +
		'%c👤 Имя:%c Григорий Виняр\n' +
		'%c💼 Должность:%c Junior Frontend Developer\n' +
		'%c📍 Локация:%c Ярославль, Россия\n' +
		'%c📧 Email:%c grishavinyar64@gmail.com\n' +
		'%c🌐 GitHub:%c https://github.com/Grisha55\n' +
		'%c📱 Telegram:%c @gregoryvinyar\n',
	'color: #fff; background: #ff6b6b; font-size: 16px; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
	'color: #fff;',
	'color: #4ecdc4; font-weight: bold;',
	'color: #f7fff7;',
	'color: #ffe66d; font-weight: bold;',
	'color: #f7fff7;',
	'color: #4ecdc4; font-weight: bold;',
	'color: #f7fff7;',
	'color: #ffe66d; font-weight: bold;',
	'color: #f7fff7;',
	'color: #4ecdc4; font-weight: bold;',
	'color: #f7fff7;',
	'color: #ffe66d; font-weight: bold;',
	'color: #f7fff7;'
);

console.log(
	'%c🛠️ ТЕХНИЧЕСКИЕ НАВЫКИ %c\n',
	'color: #fff; background: #ff6b6b; font-size: 16px; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
	'color: #fff;'
);

const skills = [
	{ name: 'JavaScript/TypeScript', level: 95 },
	{ name: 'React/Next.js', level: 90 },
	{ name: 'Node.js', level: 88 },
	{ name: 'HTML/CSS', level: 92 }
];

skills.forEach(skill => {
	const barLength = 40;
	const filled = Math.round((skill.level / 100) * barLength);
	const bar = '█'.repeat(filled) + '░'.repeat(barLength - filled);
	console.log(
		`%c ${skill.name.padEnd(20)} %c[${bar}] %c${skill.level}%c%`,
		'color: #ff6b6b; font-weight: bold;',
		'color: #4ecdc4;',
		'color: #ffe66d; font-weight: bold;',
		'color: #f7fff7;'
	);
});

// Стиль 5: Секция с опытом работы
console.log(
	'\n%c💼 ОПЫТ РАБОТЫ %c\n',
	'color: #fff; background: #ff6b6b; font-size: 16px; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
	'color: #fff;'
);

const experience = [
	{
		period: '2022–н.в.',
		company: 'TechCorp',
		position: 'Lead Frontend Developer'
	},
	{
		period: '2019–2022',
		company: 'StartupX',
		position: 'Full-Stack Developer'
	},
	{ period: '2017–2019', company: 'WebStudio', position: 'Junior Developer' }
];

experience.forEach(exp => {
	console.log(
		`%c▸ ${exp.period} %c| %c${exp.company} %c→ %c${exp.position}`,
		'color: #ffe66d; font-weight: bold;',
		'color: #f7fff7;',
		'color: #4ecdc4; font-weight: bold;',
		'color: #f7fff7;',
		'color: #ff6b6b;'
	);
});

console.log(
	'%c\n' +
		'   ╭─────────────────────────────────────────────╮\n' +
		'   │  🎉 Thanks for checking out my resume! 🎉   │\n' +
		'   │                                             │\n' +
		"   │     (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  Let's create something   │\n" +
		'   │           amazing together!  ✧ﾟ･: *ヽ(◕ヮ◕ヽ)    │\n' +
		'   ╰─────────────────────────────────────────────╯\n',
	'color: #ff6b6b; font-family: monospace; font-size: 12px;'
);

console.log(
	'%c📞 Свяжись со мной: %c\n   📧 gregoryvinyar64@gmail.com\n   🌐 portfolio.dev\n   💬 t.me/gregoryvinyar',
	'color: #fff; background: #ff6b6b; font-size: 14px; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
	'color: #f7fff7;'
);

console.log(
	'%c' +
		'═'.repeat(60) +
		'\n✨ Ctrl+C / Cmd+C чтобы скопировать контакты ✨\n' +
		'═'.repeat(60),
	'color: #4ecdc4; font-family: monospace; font-size: 12px;'
);

export function AppPageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="page">
			<div className="main">{children}</div>
		</div>
	);
}
