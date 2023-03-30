
import { useTranslation } from 'react-i18next'
import { HListBox } from '@/shared/ui/HListBox/HListBox'
import { Page } from '@/widgets/Page/Page'
import { HStack } from '@/shared/ui/Stack'

const MainPage = () => {
  const { t } = useTranslation()

  return (
        <Page>
            {t('Main page')}
        </Page>
  )
}

export default MainPage
