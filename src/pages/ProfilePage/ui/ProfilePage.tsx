import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { Page } from 'widgets/Page/Page'
import { EditableProfileCard } from 'features/editableProfileCard'
import { useParams } from 'react-router'
import { Text } from 'shared/ui/Text/Text'
import {
  EditableProfileCardHeader
} from 'features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader'

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
