import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import cls from './NotificationButton.module.scss';

import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popups } from '@/shared/ui/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <div
            role={'button'}
            onClick={onOpenDrawer}
            className={cls.notification}>
            <Icon Svg={NotificationIcon} inverted />
        </div>
    );
    return (
        <div>
            <BrowserView>
                <div
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}>
                    <Popups trigger={trigger}>
                        <NotificationList />
                    </Popups>
                </div>
            </BrowserView>

            <MobileView>
                <div
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </div>
            </MobileView>
        </div>
    );
});
