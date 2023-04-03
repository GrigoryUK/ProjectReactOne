import { HTMLAttributes, memo, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './Card.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'

export enum CardTheme {
    PRIMARY = 'primary',
    OUTLINED = 'outlined',
    OUTLINED_ACTIVE = 'outlined-active',
    OUTLINED_MESSAGE = 'outlined-message'

}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    def?: boolean;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    def = false,
    theme = CardTheme.PRIMARY,
    ...otherProps
  } = props
  const { t } = useTranslation()
  return (
        <div {...otherProps} className={classNames(cls.Card, {}, [className, cls[theme]])}>
            {children}
        </div>
  )
})
