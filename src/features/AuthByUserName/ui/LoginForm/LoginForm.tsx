import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Input, InputSize, InputTheme } from '@/shared/ui/Input'
import { Text, TextTheme } from '@/shared/ui/Text'
import React, { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;

}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUserName)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [onSuccess, dispatch, password, username])

  return (
       <DynamicModuleLoader
           removeAfterUnmount
           reducers={initialReducers}>
           <div className={classNames(cls.LoginForm, {}, [className])}>
               <Text className={cls.title} title={t('Authorization form')}/>
               {error && <Text className={cls.LoginForm__error} theme={TextTheme.ERROR}
                               text={t('Password or login is incorrect')}/>}
               <Input

                   type="text"
                   theme={InputTheme.PRIMARY}
                   size={InputSize.M}
                   placeholder={t('Login')}
                   autofocus
                   className={cls.LoginForm__input}
                   onChange={onChangeUserName}
                   value={username}

               />
               <Input
                   type="text"
                   theme={InputTheme.PRIMARY}
                   size={InputSize.M}
                   placeholder={t('Password')}
                   className={cls.LoginForm__input}
                   onChange={onChangePassword}
                   value={password}
               />
               <Button
                   onClick={onLoginClick}
                   theme={ButtonTheme.OUTLINE}
                   disabled={isLoading}
                   className={cls.LoginForm__btn}>
                   {t('sign in')}
               </Button>
           </div>
       </DynamicModuleLoader>
  )
})

export default LoginForm
