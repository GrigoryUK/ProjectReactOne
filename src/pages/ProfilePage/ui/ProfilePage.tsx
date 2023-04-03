import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

import { EditableProfileCard } from '@/features/editableProfileCard'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile')
  const { id } = useParams<{id: string}>()

  if (!id) {
    return (
            <Text text={t('id не найден')}/>
    )
  }
  return (
           <Page className={classNames('', {}, [className])}>
                <EditableProfileCard id={id}/>
           </Page>
  )
}

export default ProfilePage
