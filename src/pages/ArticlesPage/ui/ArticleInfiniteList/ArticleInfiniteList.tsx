import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { getArticles } from '../../model/slices/articlesPageSlice'

import cls from './ArticleInfiniteList.module.scss'

import { ArticleList } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'

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
