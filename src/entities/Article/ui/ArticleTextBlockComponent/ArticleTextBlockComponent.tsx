import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleBlockText } from '../../model/types/article';

import cls from './ArticleTextBlockComponent.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleBlockText;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();
        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}>
                {block.title && (
                    <Text
                        title={block.title}
                        className={cls.ArticleTextBlockComponent__title}
                    />
                )}
                {block.paragraphs.map((paragraph, index) => (
                    <Text
                        key={paragraph}
                        text={paragraph}
                        className={cls.ArticleTextBlockComponent__text}
                    />
                ))}
            </div>
        );
    },
);
