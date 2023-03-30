import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { Page } from '@/widgets/Page/Page'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            <h1>{t('Page not found')}</h1>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('Main')}</AppLink>
        </Page>
  )
}
