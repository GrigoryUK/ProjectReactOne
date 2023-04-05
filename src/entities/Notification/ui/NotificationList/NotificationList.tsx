import { memo } from 'react';

import { useNotifications } from '../../api/notificationApi/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

import cls from './NotificationList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading, error } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack
                gap={'16'}
                max
                className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton
                    width={'200px'}
                    height={'70px'}
                    border={'0.5rem'}></Skeleton>
                <Skeleton
                    width={'100%'}
                    height={'70px'}
                    border={'0.5rem'}></Skeleton>
                <Skeleton
                    width={'100%'}
                    height={'70px'}
                    border={'0.5rem'}></Skeleton>
                <Skeleton
                    width={'100%'}
                    height={'70px'}
                    border={'0.5rem'}></Skeleton>
            </VStack>
        );
    }
    return (
        <VStack
            gap={'16'}
            max
            className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
