import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './Navbar.module.scss';

import { Profile } from '@/entities/Profile';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface NavbarProps {
    data?: Profile;
    className?: string;
}

export const Navbar = memo(({ className, data }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onCloseModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    if (authData) {
        return (
            <header
                data-testid="navbar"
                className={classNames(cls.Navbar, {}, [className])}>
                <AvatarDropdown />
                <div className={cls.Navbar__switcher}>
                    <ThemeSwitcher />
                    <LangSwitcher className={cls.LangSwitcher} />
                    <NotificationButton />
                </div>
            </header>
        );
    }
    return (
        <header
            data-testid="navbar"
            className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.Navbar__logo}>{t('Logo')}</div>
            <div className={cls.Navbar__switcher}>
                <Button
                    className={cls.btn__sing}
                    theme={ButtonTheme.OUTLINE_NORMAL}
                    onClick={onCloseModal}>
                    {t('sign in')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </header>
    );
});
