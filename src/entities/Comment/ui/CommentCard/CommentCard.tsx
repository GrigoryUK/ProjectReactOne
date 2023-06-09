import { memo } from 'react';

import { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TestProps } from '@/shared/types/tests';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';

interface CommentCardProps extends TestProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}>
                <div className={cls.CommentCard__header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border={'50%'}
                        className={cls.CommentCard__avatar}
                    />
                    <Skeleton width={'50%'} height={16} />
                </div>
                <Skeleton width={'100%'} height={30} />
            </div>
        );
    }
    if (!comment) {
        return null;
    }

    return (
        <div
            data-testid={'CommentCard.Content'}
            className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                to={getRouteProfile(comment.user.id)}
                className={cls.CommentCard__header}>
                {comment.user.avatar ? (
                    <Avatar
                        src={comment.user.avatar}
                        className={cls.CommentCard__avatar}
                        size={30}
                    />
                ) : null}
                <Text text={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </div>
    );
});
