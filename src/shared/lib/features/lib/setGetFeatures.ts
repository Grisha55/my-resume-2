import { FeatureFlags } from '@/src/shared/types/featureFlags';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/src/shared/consts/localstorage';

// Функция для получения значения из localStorage (только на клиенте)
const getInitialFeatureFlags = (): FeatureFlags => {
    // Проверяем, что код выполняется в браузере
    if (typeof window !== 'undefined') {
        return {
            isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new'
        };
    }
    // Значение по умолчанию для сервера
    return {
        isAppRedesigned: false
    };
};

// Инициализируем фичи безопасно
let featureFlags: FeatureFlags = getInitialFeatureFlags();

// Функция для инициализации фич (вызывать на клиенте после монтирования)
export function initFeatureFlags() {
    if (typeof window !== 'undefined') {
        featureFlags = {
            isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new'
        };
    }
}

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}