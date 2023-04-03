import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'

import cls from './Page.module.scss'

import { StateSchema } from '@/app/providers/StoreProvider'
import { getScrollSaveByPath, scrollSaveActions } from '@/features/ScrollSave'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import { TestProps } from '@/shared/types/tests'

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const {
    className,
    children,
    onScrollEnd
  } = props
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const scrollPosition = useSelector(
    (state: StateSchema) =>
      getScrollSaveByPath(state, pathname)
  )
  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname
    }))
  }, 10000)
  // поменять на 500 тяжело смотреть экшаны
  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  useInfiniteScroll({
    callback: onScrollEnd,
    wrapperRef,
    triggerRef
  })
  return (
        <section
            onScroll={onScroll}
            ref={wrapperRef}
            data-testid={props['data-testid'] ?? 'Page'}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
          {onScrollEnd && <div className={cls.Page__block} ref={triggerRef}/>}
        </section>
  )
})
