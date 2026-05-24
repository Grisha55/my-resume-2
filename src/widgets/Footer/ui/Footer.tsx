'use client';

import githubIcon from '@/src/shared/assets/images/github.png';
import { Modal } from '@/src/shared/ui/Modal';
import { Text } from '@/src/shared/ui/Text';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// Компонент модального окна для условий
const TermsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
    <Modal isOpen={isOpen} onClose={onClose} lazy={false}>
        <div className="space-y-4 max-h-[80vh] overflow-y-auto p-1">
            <Text
                title="🤝 Условия использования (с прищуром)"
                size="l"
                variant="accent"
                align="center"
            />
            
            <Text
                text="Обновлено: Когда рак на горе свистнет"
                size="s"
                variant="primary"
                align="center"
            />

            <div className="mt-4 space-y-4">
                <div>
                    <Text
                        title="1. Вы уже согласились"
                        size="m"
                        variant="accent"
                        bold
                    />
                    <Text
                        text="Только что, прокручивая эту модалку, вы мысленно подписались на всё нижеперечисленное. Поздравляем! 🎉"
                        size="s"
                        variant="primary"
                    />
                </div>

                <div>
                    <Text
                        title="2. Всё моё — это моё"
                        size="m"
                        variant="accent"
                        bold
                    />
                    <Text
                        text="Тексты, картинки и даже вдохновение, которое вы тут почерпнули, — всё это принадлежит мне. Хотите использовать? Спросите разрешения! Иначе моя собака Альфа придет за вашими проводами. 🔌"
                        size="s"
                        variant="primary"
                    />
                </div>

                <div>
                    <Text
                        title="3. Можно (но осторожно)"
                        size="m"
                        variant="accent"
                        bold
                    />
                    <Text
                        text="Разрешено: • Восхищаться дизайном (желательно вслух) • Показывать сайт друзьям как пример гениальности • Присылать предложения о работе (с зарплатой выше средней)"
                        size="s"
                        variant="primary"
                    />
                </div>

                <div>
                    <Text
                        title="4. Нельзя (серьёзно!)"
                        size="m"
                        variant="accent"
                        bold
                    />
                    <Text
                        text="Запрещено: • Притворяться, что это ваш сайт (я всё равно узнаю) • Критиковать дизайн (только комплименты!) • Рассылать мне спам (котят и мемы — можно)"
                        size="s"
                        variant="primary"
                    />
                </div>

                <div>
                    <Text
                        title="5. Юридическая магия"
                        size="m"
                        variant="accent"
                        bold
                    />
                    <Text
                        text="В случае споров мы решаем всё битвой на код-дуэлях. Проигравший покупает кофе. ☕"
                        size="s"
                        variant="primary"
                    />
                </div>
            </div>
        </div>
    </Modal>
);

// Компонент модального окна для политики конфиденциальности
const PrivacyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
    <Modal isOpen={isOpen} onClose={onClose} lazy={false}>
        <div className="space-y-4 max-h-[80vh] overflow-y-auto p-1">
            <Text
                title="🔒 Политика конфиденциальности (без шпионажа)"
                size="l"
                variant="accent"
                align="center"
            />
            
            <Text
                text="Тайное становится явным: Январь 2025"
                size="s"
                variant="primary"
                align="center"
            />

            <div className="mt-4 space-y-4">
                <div>
                    <Text
                        title="1. Мы не читаем ваши мысли"
                        size="m"
                        variant="accent"
                        bold
                    />
                    <Text
                        text="Если вы через форму напишете «Гриша, ты лучший!» — я это увижу. Если напишете что-то секретное — тоже увижу. Но обещаю делать вид, что не заметил. 🤫"
                        size="s"
                        variant="primary"
                    />
                </div>

                <div>
                    <Text
                        title="2. Куда уходят ваши данные?"
                        size="m"
                        variant="accent"
                        bold
                    />
                    <Text
                        text="Ваше сообщение прилетает прямо ко мне на почту. Его не видят: • Инопланетяне • Родственники • Моя собака (она только провода грызёт) • Рекламные боты"
                        size="s"
                        variant="primary"
                    />
                </div>

                <div>
                    <Text
                        title="3. Файлы cookies 🍪"
                        size="m"
                        variant="accent"
                        bold
                    />
                    <Text
                        text="Используем только техническое печенье. Шоколадное не предлагать — съем!"
                        size="s"
                        variant="primary"
                    />
                </div>

                <div>
                    <Text
                        title="4. Ваши права"
                        size="m"
                        variant="accent"
                        bold
                    />
                    <Text
                        text="Вы можете: • Спросить, какие данные я храню (скорее всего, только ваше имя и email) • Попросить это удалить (но тогда я забуду, что мы общались 😢) • Пожаловаться на мою политику (но я очень постараюсь!)"
                        size="s"
                        variant="primary"
                    />
                </div>

                <div>
                    <Text
                        title="5. Контакты для жалоб и комплиментов"
                        size="m"
                        variant="accent"
                        bold
                    />
                    <Text
                        text="Пишите на почту — отвечаю быстрее, чем соцсети показывают уведомления. Комплименты принимаются в любом виде! 💌"
                        size="s"
                        variant="primary"
                    />
                </div>
            </div>
        </div>
    </Modal>
);

export const Footer = () => {
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();

    const hideFooter = pathname === '/admin' || pathname === '/login';
    if (hideFooter) return null;

    return (
        <>
            <footer className="relative border-t border-(--primary-color)/20 py-10 mt-auto bg-(--card-bg) flex items-center justify-center">
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--primary-color) to-transparent" />
                
                <div className="flex flex-col max-w-6xl gap-2 px-4 mx-auto sm:px-6 lg:px-8">
                    {/* Основная навигация - центрируем */}
                    <div className="flex flex-wrap items-center justify-center mb-6 gap-x-8 gap-y-4">
                        <Link
                            href="#top"
                            className="text-sm font-mono text-(--inverted-bg-color) hover:text-(--primary-color) transition-colors duration-200"
                        >
                            ↑ Back to top
                        </Link>

                        <button
                            onClick={() => setIsTermsOpen(true)}
                            className="text-sm font-mono text-(--inverted-bg-color) hover:text-(--primary-color) transition-colors duration-200 cursor-pointer"
                        >
                            Terms of Use
                        </button>

                        <button
                            onClick={() => setIsPrivacyOpen(true)}
                            className="text-sm font-mono text-(--inverted-bg-color) hover:text-(--primary-color) transition-colors duration-200 cursor-pointer"
                        >
                            Privacy Policy
                        </button>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Grisha55"
                            className="flex items-center gap-2 text-sm font-mono text-(--inverted-bg-color) hover:text-(--primary-color) transition-colors duration-200"
                        >
                            <Image
                                src={githubIcon}
                                alt="GitHub"
                                width={18}
                                height={18}
                                className="transition-all duration-200 brightness-0"
                            />
                            <span>GitHub</span>
                        </a>
                    </div>

                    {/* Копирайт - по центру */}
                    <div className="text-center">
                        <Text
                            text={`© ${currentYear} Gregory. Built with Next.js & Tailwind CSS`}
                            size="s"
                            variant="accent"
                            align="center"
                            className="font-mono text-xs opacity-70"
                        />
                    </div>
                </div>
            </footer>

            <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
            <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        </>
    );
};

Footer.displayName = 'Footer';