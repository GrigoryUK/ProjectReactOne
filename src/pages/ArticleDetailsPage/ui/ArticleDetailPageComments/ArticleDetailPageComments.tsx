import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleDetailPageComments.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Text } from '@/shared/ui/Text'
import { AddCommentForm } from '@/features/addCommentForm'
import { CommentList } from '@/entities/Comment'
import { useSelector } from 'react-redux'
import { getArticleComments } from '../../model/slice/ArticleDetailCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/getComments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

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
