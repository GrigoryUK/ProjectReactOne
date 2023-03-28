import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { useParams } from 'react-router'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { useSelector } from 'react-redux'
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/getComments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

import { AddCommentForm } from 'features/addCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleComments } from '../../model/slice/ArticleDetailCommentsSlice'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { Page } from 'widgets/Page/Page'
import { getArticleDetailRecommends } from '../../model/slice/ArticleDetailRecommendsSlice'
import {
  ArticleDetailRecommendsError,
  ArticleDetailRecommendsIsLoading
} from '../../model/selectors/articleDetailRecommendsSelectors'
import { fetchRecommends } from '../../model/services/fetchRecommends/fetchRecommends'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader'
import { ArticleRecommendationList } from 'features/articleRecommendationList'
import {
  ArticleDetailPageComments
} from '../ArticleDetailPageComments/ArticleDetailPageComments'

interface ArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
  const {
    className
  } = props
  const { t } = useTranslation()
  const { id } = useParams<{id: string}>()

  if (!id) {
    return (
            <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
    )
  }
  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
              <ArticleDetailPageHeader/>
              <ArticleDetails id={id}/>
               <ArticleRecommendationList/>
             <ArticleDetailPageComments id={id}/>
          </Page>
      </DynamicModuleLoader>

  )
}

export default memo(ArticleDetailPage)
