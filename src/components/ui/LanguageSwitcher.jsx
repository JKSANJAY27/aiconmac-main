'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { startTransition } from 'react';

export default function LanguageSwitcher({ className = "", style = {} }) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const onSelectChange = (e) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <select
            defaultValue={locale}
            style={style}
            className={`bg-transparent border rounded px-2 py-1 text-sm focus:outline-none focus:border-amber-500 transition-colors duration-300 ${className}`}
            onChange={onSelectChange}
        >
            <option value="en" className="text-black">English</option>
            <option value="ar" className="text-black">العربية</option>
            <option value="ru" className="text-black">Русский</option>
        </select>
    );
}
