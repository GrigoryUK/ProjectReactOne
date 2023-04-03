import { memo } from 'react'

import { ArticleView } from '../../model/consts/consts'

import cls from './ArticleListItem.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card'
import { Skeleton } from '@/shared/ui/Skeleton'

interface ArticleListItemSkeletonProps {
    className?: string;

    view: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view
  } = props

  if (view === ArticleView.LIST) {
    return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.ArticleListItem__card}>
                    <div className={cls.ArticleListItem__header}>
                        <div className={cls.ArticleListItem__header__box}>
                            <Skeleton width={30} height={30} border={'50%'} />
                            <Skeleton width={100} height={16}/>
                        </div>
                        <Skeleton width={'10%'} height={16} className={cls.ArticleListItem__date}/>
                    </div>
                    <Skeleton width={'100%'} height={20} className={cls.ArticleListItem__title}/>
                    <div className={cls.ArticleListItem__info}>
                        <Skeleton width={'50%'} height={16} className={cls.ArticleListItem__types}/>
                    </div>
                    <div className={cls.ArticleListItem__card__box}>
                        <Skeleton width={'100%'} height={200}/>
                    </div>
                    <div className={cls.ArticleListItem__card__text}>
                        <Skeleton width={'100%'} height={200} />
                    </div>
                    <div className={cls.ArticleListItem__card__row}>
                        <Skeleton width={100} height={16}/>
                        <div className={cls.ArticleListItem__info__box}>
                            <Skeleton width={100} height={16}/>
                            <Skeleton width={20} height={20} border={'50%'} />
                        </div>
                    </div>

                </Card>
            </div>
    )
  }

  return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.ArticleListItem__card}>
                <div className={cls.ArticleListItem__card__box}>
                    <Skeleton width={'100%'} height={200} className={cls.ArticleListItem__image}/>
                    <Skeleton width={100} height={16} className={cls.ArticleListItem__date}/>
                </div>
                <div className={cls.ArticleListItem__info}>
                    <Skeleton width={'50%'} height={16} className={cls.ArticleListItem__types}/>
                    <div className={cls.ArticleListItem__info__box}>
                        <Skeleton width={100} height={16} />
                        <Skeleton width={20} height={20} border={'50%'} />
                    </div>

                </div>
                <Skeleton width={'100%'} height={16} className={cls.ArticleListItem__title}/>
            </Card>
        </div>
  )
})
