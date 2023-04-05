import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    useGetArticleRating,
    useRateArticle,
} from '../api/articleRatingApi/articleRatingApi';

import cls from './ArticleRating.module.scss';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const rating = data?.[0];

    const [rateArticleMutation] = useRateArticle();

    const handlerArticleRate = useCallback(
        (startsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: startsCount,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    );

    const onAccept = useCallback(
        (startsCount: number, feedback?: string) => {
            handlerArticleRate(startsCount, feedback);
        },
        [handlerArticleRate],
    );

    const onCancel = useCallback(
        (startsCount: number) => {
            handlerArticleRate(startsCount);
        },
        [handlerArticleRate],
    );

    if (isLoading) {
        return <Skeleton width={'100%'} height={120} />;
    }

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={classNames(cls.ArticleRating, {}, [className])}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставляя отзыв, вы улучшаете наш сервис')}
        />
    );
});

export default ArticleRating;
