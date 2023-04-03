import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import DarkIcon from '@/shared/assets/icons/btn-theme-dark.svg'
import LightIcon from '@/shared/assets/icons/btn-theme-light.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { memo } from 'react'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Theme } from '@/shared/const/theme'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon className={cls.ThemeSwitcher__dark} /> : <LightIcon />}
        </Button>
  )
})
