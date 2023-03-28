import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleTypeTabs.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { Tabs, TabsItem } from 'shared/ui/Tabs/Tabs'
import { ArticleType } from '../../model/consts/consts'

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const {
    className,
    value,
    onChangeType
  } = props
  const { t } = useTranslation()

  const onTypeClick = useCallback((tab: TabsItem<ArticleType>) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])

  const typeTabs = useMemo<TabsItem<ArticleType>[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все')
    },
    {
      value: ArticleType.IT,
      content: t('Айти')
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука')
    },
    {
      value: ArticleType.BOOKS,
      content: t('Книги')
    }

  ], [t])
  return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTypeClick}
            className={classNames(cls.ArticleTypeTabs, {}, [className])} />

  )
})
