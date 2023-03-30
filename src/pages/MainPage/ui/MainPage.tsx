import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'
import { StartRating } from '@/shared/ui/StartRating/StartRating'
import { RatingCard } from '@/entities/Rating'

const MainPage = () => {
  const { t } = useTranslation()

  return (
        <Page>
            {t('Main page')}
        </Page>
  )
}

export default MainPage
