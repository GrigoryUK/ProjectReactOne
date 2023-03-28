import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, ReactNode, useCallback } from 'react'
import { Card, CardTheme } from '../Card/Card'

export interface TabsItem<T extends string> {
    value: string;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabsItem<T>[];
    value: T;
    onTabClick: (tab: TabsItem<T>) => void
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const {
    className,
    tabs,
    value,
    onTabClick
  } = props
  const { t } = useTranslation()

  const clickHandler = useCallback(<T extends string>(tab: TabsItem<T>) => {
    return () => {
      onTabClick(tab)
    }
  }, [onTabClick])

  return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.OUTLINED_ACTIVE}
                    key={tab.value}
                    className={cls.tab}
                    onClick={clickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
  )
}
