import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

import cls from './CommentList.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { t } = useTranslation()
  const {
    className,
    comments,
    isLoading
  } = props

  if (isLoading) {
    return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
            </div>
    )
  }
  return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
              ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        comment={comment}
                        className={cls.CommentList__card}/>
              ))
              : <Text text={t('Комментариев пока нет')}/>}
        </div>
  )
})
