import { CSSProperties, useMemo } from 'react'

import cls from './Avatar.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, size, alt } = props
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100
    }
  }, [size])

  return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            alt={alt}
        />
  )
}
