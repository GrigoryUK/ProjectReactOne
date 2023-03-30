import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileCard.module.scss'
import React, { memo, useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import {
  getProfileIsLoading
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import {
  getProfileValidateErrors
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { ProfileCard } from '@/entities/Profile'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  EditableProfileCardHeader
} from '../EditableProfileCardHeader/EditableProfileCardHeader'

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorsTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
    [ValidateProfileError.INCORRECT_AGE]: t('Неккоректный возраст'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя пользователя и фамилия обязательны'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Неккоректный регион')
  }

  const reducers: ReducersList = {
    profile: profileReducer
  }

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }))
  }, [dispatch])
  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }))
  }, [dispatch])
  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
  }, [dispatch])
  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch])
  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }))
  }, [dispatch])
  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])
  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])
  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <EditableProfileCardHeader/>
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
          {validateErrors?.length && validateErrors.map((err) => (
              <Text
                  key={err}
                  theme={TextTheme.ERROR}
                  data-testid={'EditableProfileCard.Error'}
                  text={validateErrorsTranslates[err]}/>

          ))}
          <ProfileCard
              data={formData}
              isLoading = {isLoading}
              error = {error}
              readonly={readonly}
              onChangeFirstname={onChangeFirstname}
              onChangeLastname={onChangeLastname}
              onChangeAge={onChangeAge}
              onChangeCity={onChangeCity}
              onChangeUsername={onChangeUsername}
              onChangeAvatar={onChangeAvatar}
              onChangeCurrency={onChangeCurrency}
              onChangeCountry={onChangeCountry}
          />
        </div>
      </DynamicModuleLoader>
  )
})
