import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid={'MainPage'}>
            <div>132</div>
            {t('Main page')}
        </Page>
    );
};

export default MainPage;
