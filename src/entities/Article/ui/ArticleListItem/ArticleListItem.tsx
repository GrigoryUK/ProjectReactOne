import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import { Article, ArticleBlockText } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleListItem.module.scss';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticlesDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TestProps } from '@/shared/types/tests';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextSize } from '@/shared/ui/Text';

interface ArticleListItemProps extends TestProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleBlockText;
        return (
            <div
                data-testid={'ArticleListItem'}
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}>
                <Card className={cls.ArticleListItem__card}>
                    <div className={cls.ArticleListItem__header}>
                        <div className={cls.ArticleListItem__header__box}>
                            <Avatar src={article.user.avatar} size={30} />
                            <Text text={article.user.username} />
                        </div>
                        <Text
                            text={article.createdAt}
                            className={cls.ArticleListItem__date}
                        />
                    </div>
                    <Text
                        text={article.title}
                        size={TextSize.L}
                        className={cls.ArticleListItem__title}
                    />
                    <div className={cls.ArticleListItem__info}>
                        <Text
                            text={article.type.join(', ')}
                            className={cls.ArticleListItem__types}
                        />
                    </div>
                    <div className={cls.ArticleListItem__card__box}>
                        <AppImage
                            fallback={<Skeleton width={'100%'} height={250} />}
                            className={cls.ArticleListItem__image}
                            src={article.img}
                            alt={article.title}
                        />
                    </div>
                    <div className={cls.ArticleListItem__card__text}>
                        {textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                className={cls.ArticleListItem__textBlock}
                            />
                        )}
                    </div>
                    <div className={cls.ArticleListItem__card__row}>
                        <AppLink
                            target={target}
                            className={cls.link}
                            to={getRouteArticlesDetails(article.id)}>
                            <Button>{t('Читать далее')}</Button>
                        </AppLink>
                        <div className={cls.ArticleListItem__info__box}>
                            <Text text={String(article.views)} />
                            <Icon Svg={EyeIcon} />
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            data-testid={'ArticleListItem'}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}>
            <AppLink
                target={target}
                className={cls.link}
                to={getRouteArticlesDetails(article.id)}>
                <Card className={cls.ArticleListItem__card}>
                    <div className={cls.ArticleListItem__card__box}>
                        <AppImage
                            fallback={<Skeleton width={'100%'} height={250} />}
                            className={cls.ArticleListItem__image}
                            src={article.img}
                            alt={article.title}
                        />
                        <Text
                            text={article.createdAt}
                            className={cls.ArticleListItem__date}
                        />
                    </div>
                    <div className={cls.ArticleListItem__info}>
                        <Text
                            text={article.type.join(', ')}
                            className={cls.ArticleListItem__types}
                        />
                        <div className={cls.ArticleListItem__info__box}>
                            <Text text={String(article.views)} />
                            <Icon Svg={EyeIcon} />
                        </div>
                    </div>
                    <Text
                        text={article.title}
                        className={cls.ArticleListItem__title}
                    />
                </Card>
            </AppLink>
        </div>
    );
});
