import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { canEditDetailSelector } from '../../model/selectors/canEditDetailSelector'

import cls from './ArticleDetailPageHeader.module.scss'

import { getArticleDetailsData } from '@/entities/Article'
import { RoutePath } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'

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
