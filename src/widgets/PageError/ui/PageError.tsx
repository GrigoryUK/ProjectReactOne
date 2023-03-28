import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Oops, something went wrong')}</h1>
            <Button theme={ButtonTheme.CLEAR} onClick={reloadPage}>
                {t('Reload page')}
            </Button>
        </div>
  )
}

export default PageError
