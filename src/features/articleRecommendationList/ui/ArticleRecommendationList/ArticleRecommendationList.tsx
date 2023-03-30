import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleRecommendationList.module.scss'
import { memo } from 'react'
import { ArticleList } from '@/entities/Article'
import { Text } from '@/shared/ui/Text/Text'
import { useArticleRecommendationsList } from '../../api/articleRecommendationApi'

interface ArticleRecommendationListProps {
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
        <div className={classNames(cls.ArticleRecommendationList, {}, [className])}>
            <Text title={t('Рекомендуем')} className={cls.title}/>
            <ArticleList target="_blank" articles={articles} />
        </div>
  )
})
