'use client';

import React, { memo, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import { routeConfig } from '../config/routeConfig';
// import { PageLoader } from '@/widgets/PageLoader';

const AppRouter = () => {
    const pathname = usePathname();

    // Находим компонент для текущего пути
    const activeRoute = Object.values(routeConfig).find(
        (route) => route.path === pathname
    );

    const ActiveComponent = activeRoute?.component;

    if (!ActiveComponent) {
        return null;
    }

    return (
        <Suspense fallback={<PageLoader />}>
            <ActiveComponent />
        </Suspense>
    );
};

export default memo(AppRouter);