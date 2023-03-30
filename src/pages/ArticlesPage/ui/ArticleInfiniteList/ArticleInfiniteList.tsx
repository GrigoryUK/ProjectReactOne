import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleInfiniteList.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { ArticleList } from '@/entities/Article'
import { getArticles } from '../../model/slices/articlesPageSlice'

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const {
    className
  } = props

  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const articles = useSelector(getArticles.selectAll)
  const { t } = useTranslation()

  return (
        <div className={classNames(cls.ArticleInfiniteList, {}, [className])}>
            <ArticleList isLoading={isLoading} view={view} articles={articles}/>
        </div>
  )
})
