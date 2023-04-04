import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { useArticleRecommendationsList } from '../../api/articleRecommendationApi'

import cls from './ArticleRecommendationList.module.scss'

import { ArticleList } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { TestProps } from '@/shared/types/tests'
import { Text } from '@/shared/ui/Text'

interface ArticleRecommendationListProps extends TestProps {
    className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3)

  if (isLoading || error || !articles) {
    return null
  }

  return (
        <div data-testid={'ArticleRecommendationList'} className={classNames(cls.ArticleRecommendationList, {}, [className])}>
            <Text title={t('Рекомендуем')} className={cls.title}/>
            <ArticleList target="_blank" articles={articles} />
        </div>
  )
})
