import { useTranslation } from 'react-i18next'

import cls from './NotFoundPage.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { Page } from '@/widgets/Page'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
        <Page data-testid={'NotFoundPage'} className={classNames(cls.NotFoundPage, {}, [className])}>
            <h1>{t('Page not found')}</h1>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('Main')}</AppLink>
        </Page>
  )
}
