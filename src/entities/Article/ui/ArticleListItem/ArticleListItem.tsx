import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { useTranslation } from 'react-i18next'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Article, ArticleBlockText } from '../../model/types/article'
import { Text, TextSize } from '@/shared/ui/Text/Text'
import { Icon } from '@/shared/ui/Icon/Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { Card } from '@/shared/ui/Card/Card'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Button } from '@/shared/ui/Button/Button'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { ArticleBlockType, ArticleView } from '../../model/consts/consts'
import { RoutePath } from '@/shared/const/router'

interface ArticleListItemProps {
    className?: string;
    article: Article
    view: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view,
    target
  } = props
  const { t } = useTranslation()

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks
      .find((block) => block.type === ArticleBlockType.TEXT) as ArticleBlockText
    return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.ArticleListItem__card}>
                    <div className={cls.ArticleListItem__header}>
                        <div className={cls.ArticleListItem__header__box}>
                            <Avatar src={article.user.avatar} size={30}/>
                            <Text text={article.user.username}/>
                        </div>
                        <Text text={article.createdAt} className={cls.ArticleListItem__date}/>
                    </div>
                    <Text text={article.title} size={TextSize.L} className={cls.ArticleListItem__title}/>
                    <div className={cls.ArticleListItem__info}>
                        <Text text={article.type.join(', ')} className={cls.ArticleListItem__types}/>
                    </div>
                    <div className={cls.ArticleListItem__card__box}>
                        <img src={article.img} alt={article.title} className={cls.ArticleListItem__image}/>
                    </div>
                    <div className={cls.ArticleListItem__card__text}>
                        {textBlock &&
                            <ArticleTextBlockComponent block={textBlock} className={cls.ArticleListItem__textBlock}/>
                        }
                    </div>
                    <div className={cls.ArticleListItem__card__row}>
                            <AppLink target={target} className={cls.link} to={RoutePath.articles_details + article.id}>
                                <Button>{t('Читать далее')}</Button>
                            </AppLink>
                            <div className={cls.ArticleListItem__info__box}>
                                <Text text={String(article.views)}/>
                                <Icon Svg={EyeIcon} />
                            </div>
                    </div>
                </Card>
            </div>
    )
  }

  return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <AppLink target={target} className={cls.link} to={RoutePath.articles_details + article.id}>
                <Card className={cls.ArticleListItem__card}>
                    <div className={cls.ArticleListItem__card__box}>
                        <img src={article.img} alt={article.title} className={cls.ArticleListItem__image}/>
                        <Text text={article.createdAt} className={cls.ArticleListItem__date}/>
                    </div>
                    <div className={cls.ArticleListItem__info}>
                        <Text text={article.type.join(', ')} className={cls.ArticleListItem__types}/>
                        <div className={cls.ArticleListItem__info__box}>
                            <Text text={String(article.views)}/>
                            <Icon Svg={EyeIcon} />
                        </div>
                    </div>
                    <Text text={article.title} className={cls.ArticleListItem__title}/>
                </Card>
            </AppLink>
        </div>
  )
})
