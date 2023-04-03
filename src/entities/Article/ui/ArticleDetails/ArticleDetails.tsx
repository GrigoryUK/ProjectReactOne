import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { Text, TextSize, TextTheme } from '@/shared/ui/Text'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Avatar } from '@/shared/ui/Avatar'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import { Icon } from '@/shared/ui/Icon'
import { ArticleBlock } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleBlockType } from '../../model/consts/consts'

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {
    className,
    id
  } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent
            key={block.id}
            block={block}
            className={cls.ArticleDetails__block}

        />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent
            key={block.id}
            block={block}
            className={cls.ArticleDetails__block}
        />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent
            key={block.id}
            block={block}
            className={cls.ArticleDetails__block}
        />
      default:
        return null
    }
  }, [])

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
        <>
          <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
          <Skeleton className={cls.title} width={300} height={32} />
          <Skeleton className={cls.skeleton} width={600} height={24} />
          <Skeleton className={cls.skeleton} width="100%" height={200} />
          <Skeleton className={cls.skeleton} width="100%" height={200} />
        </>
    )
  } else if (error) {
    content = (
            <Text theme={TextTheme.ERROR} title={t('Произошла ошибка при загрузки статьи')}/>
    )
  } else {
    content = (
          <>
              <div className={cls.ArticleDetails__content__avatar}>
                  <Avatar size={200} src={article?.img} className={cls.avatar}/>
              </div>
              <Text size={TextSize.L} className={cls.title} title={article?.title} text={article?.subtitle}/>
              <div className={cls.ArticleDetails__row}>
                  <Icon Svg={EyeIcon} className={cls.smallIcon}/>
                  <Text text={String(article?.views)}/>
              </div>
              <div className={cls.ArticleDetails__row}>
                  <Icon Svg={CalendarIcon} className={cls.smallIcon}/>
                  <Text text={article?.createdAt}/>
              </div>
              {article?.blocks.map(renderBlock)}
          </>

    )
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames(cls.ArticleDetails, {}, [className])}>
              {content}
          </div>
      </DynamicModuleLoader>

  )
})
