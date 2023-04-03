import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { memo } from 'react'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (

            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={toggle}>{t('languages')}</Button>

  )
})
