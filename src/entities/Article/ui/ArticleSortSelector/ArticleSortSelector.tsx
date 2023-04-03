import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleSortField } from '../../model/consts/consts'

import cls from './ArticleSortSelector.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { SortOrder } from '@/shared/types/'
import { Select, SelectOption } from '@/shared/ui/Select'

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort
  } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('возрастанию')
    },
    {
      value: 'desc',
      content: t('по убыванию')
    }
  ], [t])

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания')
    },
    {
      value: ArticleSortField.VIEW,
      content: t('просмотрам')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию')
    }
  ], [t])

  return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                value={sort}
                onChange={onChangeSort}
                className={cls.select}
                options={sortFieldOptions}
                label={t('Сортировать по')}/>
            <Select
                value={order}
                onChange={onChangeOrder}
                className={cls.select}
                options={orderOptions}
                label={t('По')}/>
        </div>
  )
})
