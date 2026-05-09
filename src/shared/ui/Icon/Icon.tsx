// shared/ui/redesigned/Icon/Icon.tsx
import React, { memo } from 'react';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...otherProps
    } = props;

    // Базовые стили для иконки
    const iconStyles = `
        transition-all duration-200
        flex-shrink-0
        ${className || ''}
    `;

    const icon = (
        <Svg
            className={iconStyles}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                className={`
                    p-1 rounded-lg
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-(--accent-redesigned)]
                    active:scale-95
                    hover:bg-(--bg-redesigned)
                    text-(--icon-redesigned)
                    hover:text-(--accent-redesigned)
                    flex items-center justify-center
                `}
                onClick={props.onClick}
                style={{ width, height }}
                aria-label="Icon button"
            >
                {icon}
            </button>
        );
    }

    return icon;
});

Icon.displayName = 'Icon';