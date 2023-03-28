import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { memo } from 'react'
import { Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading
  } = props
  if (isLoading) {
    return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.CommentCard__header}>
                    <Skeleton width={30} height={30} border={'50%'} className={cls.CommentCard__avatar} />
                    <Skeleton width={'50%'} height={16}/>
                </div>
                <Skeleton width={'100%'} height={30}/>
            </div>
    )
  }
  if (!comment) {
    return null
  }
  return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={`${RoutePath.profile}${comment.user.id}`} className={cls.CommentCard__header}>
                    {comment.user.avatar
                      ? <Avatar
                            src={comment.user.avatar}
                            className={cls.CommentCard__avatar}
                            size={30}
                        />
                      : null}
                    <Text text={comment.user.username}/>
                </AppLink>
                <Text text={comment.text}/>
        </div>
  )
})
