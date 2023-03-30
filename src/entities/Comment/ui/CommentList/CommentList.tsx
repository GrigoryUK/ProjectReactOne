import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/Text/Text'
import { CommentCard } from '../CommentCard/CommentCard'
import { Comment } from '../../model/types/comment'
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
