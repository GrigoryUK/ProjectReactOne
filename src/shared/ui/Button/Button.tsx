import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';

import cls from './Button.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',

    OUTLINE_ERROR = 'outline--error',
    OUTLINE_SUCCESS = 'outline--success',
    OUTLINE_NORMAL = 'outline--normal',
    COLLAPSE = 'collapse',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    X = 'size_x',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    max?: boolean;
}

export const Button: FC<ButtonProps> = memo<ButtonProps>(
    (props: ButtonProps) => {
        const {
            className,
            children,
            theme = ButtonTheme.OUTLINE,
            size = ButtonSize.M,
            disabled,
            max,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.disabled]: disabled,
            [cls.max]: max,
        };

        return (
            <button
                type={'button'}
                className={classNames(cls.Button, mods, [
                    className,
                    cls[theme],
                    cls[size],
                ])}
                disabled={disabled}
                {...otherProps}>
                {children}
            </button>
        );
    },
);
