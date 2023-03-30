import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text } from '@/shared/ui/Text/Text'
import { ArticleView } from '../../model/consts/consts'

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 12 : 4)
  .fill(0)
  .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
  ))

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.GRID,
    target
  } = props
  const { t } = useTranslation()
  const renderArticle = (article: Article) => {
    return (
          <ArticleListItem target={target} article={article} view={view} key={article.id}/>
    )
  }

  if (!isLoading && !articles.length) {
    return (
          <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
              <Text title={t('Статей на эту тему пока нет')}/>
          </div>
    )
  }

  return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
              ? articles.map(renderArticle)
              : null
            }
            {isLoading && getSkeletons(view)}
        </div>
  )
})
