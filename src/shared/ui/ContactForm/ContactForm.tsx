'use client';

import { useState } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';

interface ContactFormProps {
    className?: string;
    title?: string;
    email?: string;
    submitText?: string;
    successMessage?: string;
    errorMessage?: string;
    onSubmitSuccess?: () => void;
    onSubmitError?: () => void;
}

type FormStatus = 'idle' | 'success' | 'error' | 'loading';

export const ContactForm = ({
    className,
    title = 'Для связи со мной:',
    email = 'grishavinyar64@gmail.com',
    submitText = 'Отправить',
    successMessage = '✓ Сообщение отправлено!',
    errorMessage = '✗ Ошибка отправки. Попробуйте позже.',
    onSubmitSuccess,
    onSubmitError,
}: ContactFormProps) => {
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('loading');
        
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(`https://formsubmit.co/${email}`, {
                method: 'POST',
                body: formData,
            });
            
            if (response.ok) {
                setFormStatus('success');
                form.reset();
                onSubmitSuccess?.();
                setTimeout(() => setFormStatus('idle'), 3000);
            } else {
                setFormStatus('error');
                onSubmitError?.();
                setTimeout(() => setFormStatus('idle'), 3000);
            }
        } catch {
            setFormStatus('error');
            onSubmitError?.();
            setTimeout(() => setFormStatus('idle'), 3000);
        }
    };

    return (
        <div className={classNames('mt-12 pt-6 border-t border-(--primary-color)/30', {}, [className || ''])}>
            <div className="flex items-center gap-2 mb-4">
                <span className="text-(--primary-color) font-mono text-sm">$&gt;</span>
                <span className="font-mono text-sm text-gray-400">{title}</span>
            </div>

            <form
                onSubmit={handleSubmit}
                action={`https://formsubmit.co/${email}`}
                method="POST"
                className="max-w-md mx-auto space-y-4"
            >
                <input type="hidden" name="_subject" value="Новое сообщение с сайта!" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://Grisha55.github.io/my-resume/success.html" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="group">
                    <label className="block mb-1 font-mono text-sm text-gray-400">
                        <span className="text-(--primary-color)">$&gt;</span> Имя:
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        disabled={formStatus === 'loading'}
                        className="w-full px-4 py-2 bg-black/50 border border-(--primary-color)/30 rounded-lg font-mono text-sm text-gray-300 focus:outline-none focus:border-(--primary-color) focus:ring-1 focus:ring-(--primary-color) transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </div>

                <div className="group">
                    <label className="block mb-1 font-mono text-sm text-gray-400">
                        <span className="text-(--primary-color)">$&gt;</span> Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        disabled={formStatus === 'loading'}
                        className="w-full px-4 py-2 bg-black/50 border border-(--primary-color)/30 rounded-lg font-mono text-sm text-gray-300 focus:outline-none focus:border-(--primary-color) focus:ring-1 focus:ring-(--primary-color) transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </div>

                <div className="group">
                    <label className="block mb-1 font-mono text-sm text-gray-400">
                        <span className="text-(--primary-color)">$&gt;</span> Сообщение:
                    </label>
                    <textarea
                        name="message"
                        rows={4}
                        required
                        disabled={formStatus === 'loading'}
                        className="w-full px-4 py-2 bg-black/50 border border-(--primary-color)/30 rounded-lg font-mono text-sm text-gray-300 focus:outline-none focus:border-(--primary-color) focus:ring-1 focus:ring-(--primary-color) transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </div>

                <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full py-3 bg-(--primary-color)/10 border border-(--primary-color) rounded-lg font-mono text-sm text-(--primary-color) hover:bg-(--primary-color)/20 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {formStatus === 'loading' ? (
                        <span className="inline-flex items-center gap-2">
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Отправка...
                        </span>
                    ) : (
                        <>
                            <span className="transition-all group-hover:mr-2">$&gt; {submitText}</span>
                            <span className="transition-all opacity-0 group-hover:opacity-100">_</span>
                        </>
                    )}
                </button>

                {formStatus === 'success' && (
                    <div className="py-2 font-mono text-sm text-center text-green-500 border border-green-500 rounded-lg bg-green-500/20 animate-pulse">
                        {successMessage}
                    </div>
                )}
                {formStatus === 'error' && (
                    <div className="py-2 font-mono text-sm text-center text-red-500 border border-red-500 rounded-lg bg-red-500/20">
                        {errorMessage}
                    </div>
                )}
            </form>
        </div>
    );
};

ContactForm.displayName = 'ContactForm';