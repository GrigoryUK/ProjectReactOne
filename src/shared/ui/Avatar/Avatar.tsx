import { CSSProperties, useMemo } from 'react';

import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import cls from './Avatar.module.scss';

import AvatarIcon from '@/shared/assets/icons/avatar.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt } = props;
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        };
    }, [size]);

    const errorFallback = (
        <Icon className={cls.icon} width={size} Svg={AvatarIcon} />
    );
    const fallback = <Skeleton width={size} height={size} border={'50%'} />;

    return (
        <AppImage
            errorFallback={errorFallback}
            fallback={fallback}
            src={src}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            alt={alt}
        />
    );
};
