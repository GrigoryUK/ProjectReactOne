import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

import cls from './ArticleEditPage.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const {
    className
  } = props
  const { t } = useTranslation()
  const { id } = useParams<{id: string}>()
  const isEdit = Boolean(id)
  return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
              ? <Text className={cls.Title} title={t('Редактирование статьи')}/>
              : <Text className={cls.Title} title={t('Создание статьи')}/>
            }
        </Page>
  )
})

export default ArticleEditPage
