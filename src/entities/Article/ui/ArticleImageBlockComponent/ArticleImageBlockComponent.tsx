import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleBlockImage } from '../../model/types/article'
import { Text, TextAlign } from 'shared/ui/Text/Text'

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleBlockImage;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const {
    className,
    block
  } = props
  const { t } = useTranslation()
  return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} className={cls.ArticleImageBlockComponent__img} alt={block.title}/>
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} className={cls.ArticleImageBlockComponent__text}/>
            )}
        </div>
  )
})
