import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleBlockCode } from '../../model/types/article';

import cls from './ArticleCodeBlockComponent.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleBlockCode;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();
        return (
            <div
                className={classNames(cls.ArticleCodeBlockComponent, {}, [
                    className,
                ])}>
                <Code text={block.code} />
            </div>
        );
    },
);
