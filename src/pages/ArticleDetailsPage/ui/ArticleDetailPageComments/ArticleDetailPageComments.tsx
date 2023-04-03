import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getArticleCommentsIsLoading } from '../../model/selectors/getComments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleComments } from '../../model/slice/ArticleDetailCommentsSlice'

import cls from './ArticleDetailPageComments.module.scss'

import { CommentList } from '@/entities/Comment'
import { AddCommentForm } from '@/features/addCommentForm'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text } from '@/shared/ui/Text'

interface ArticleDetailPageCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailPageComments = memo((props: ArticleDetailPageCommentsProps) => {
  const {
    className,
    id
  } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
        <div className={classNames(cls.ArticleDetailPageComments, {}, [className])}>
            <Text title={t('Comments')} className={cls.title}/>
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList isLoading={commentsIsLoading} comments={comments}/>
        </div>
  )
})
