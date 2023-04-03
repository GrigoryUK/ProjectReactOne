import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleDetailPageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { useSelector } from 'react-redux'
import { canEditDetailSelector } from '../../model/selectors/canEditDetailSelector'
import { getArticleDetailsData } from '@/entities/Article'
import { RoutePath } from '@/shared/const/router'

interface ArticleDetailPageHeaderProps {
    className?: string;
}

export const ArticleDetailPageHeader = memo((props: ArticleDetailPageHeaderProps) => {
  const {
    className
  } = props
  const navigate = useNavigate()
  const canEdit = useSelector(canEditDetailSelector)
  const article = useSelector(getArticleDetailsData)
  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles_details}${article?.id}/edit`)
  }, [article?.id, navigate])

  const { t } = useTranslation()
  return (
        <div className={classNames(cls.ArticleDetailPageHeader, {}, [className])}>
            <Button className={cls.btnBack} onClick={onBackToList}>{t('Назад')}</Button>
            {canEdit && (
                <Button
                    theme={ButtonTheme.OUTLINE_NORMAL}
                    className={cls.btnEdit}
                    onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>
            )}
        </div>
  )
})
