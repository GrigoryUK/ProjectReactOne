import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleDetailPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from '@/entities/Article'
import { useParams } from 'react-router'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page/Page'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader'
import { ArticleRecommendationList } from '@/features/articleRecommendationList'
import { ArticleDetailPageComments } from '../ArticleDetailPageComments/ArticleDetailPageComments'

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

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
              <ArticleDetailPageHeader/>
              <ArticleDetails id={id!}/>
               <ArticleRecommendationList/>
             <ArticleDetailPageComments id={id!}/>
          </Page>
      </DynamicModuleLoader>

  )
}

export default memo(ArticleDetailPage)
