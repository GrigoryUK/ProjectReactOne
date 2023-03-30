import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { Input, InputTheme } from '@/shared/ui/Input/Input'
import { Profile } from '../../model/types/profile'
import { Loader } from '@/shared/ui/Loader/Loader'
import React from 'react'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Currency } from '@/entities/Currency/model/types/currency'
import { CurrencySelect } from '@/entities/Currency'
import { Country } from '@/entities/Country/model/types/country'
import { CountrySelect } from '@/entities/Country'

interface ProfileCardProps {
    className?: string;
    data?: Profile
    error?: string
    readonly?: boolean;
    isLoading?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country: Country) => void;

}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    onChangeLastname,
    onChangeFirstname,
    readonly,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeAge,
    onChangeCurrency,
    onChangeCountry

  } = props
  const { t } = useTranslation('profile')

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  if (isLoading) {
    return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader/>
            </div>
    )
  }

  if (error) {
    return (
          <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}/>
          </div>
    )
  }
  return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar &&
                <div className={cls.avatar}>
                    <div className={cls.avatar__text}>
                        <Text text={t('Аватар')}/>
                    </div>
                    <Avatar size={100} className={cls.avatar__icon} src={data?.avatar} alt=""/></div>
            }
            <div className={cls.info}>
                <div className={cls.row}>
                    <div className={cls.subtitle}>
                        <Text text={t('Имя')}/>
                    </div>
                    <div className={cls.input}>
                        <Input
                            theme={InputTheme.PRIMARY}
                            value={data?.first}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                            data-testid={'ProfileCard.firstname'}
                        />
                    </div>

                </div>
                <div className={cls.row}>
                    <div className={cls.subtitle}>
                        <Text text={t('Фамилия')}/>
                    </div>
                    <div className={cls.input}>
                        <Input
                            theme={InputTheme.PRIMARY}

                            value={data?.lastname}
                            onChange={onChangeLastname}
                            readonly={readonly}
                            data-testid={'ProfileCard.lastname'}
                        />
                    </div>
                </div>
                <div className={cls.row}>
                    <div className={cls.subtitle}>
                        <Text text={t('Возраст')}/>
                    </div>
                    <div className={cls.input}>
                        <Input
                            theme={InputTheme.PRIMARY}
                            value={data?.age}
                            pattern="[0-9]*"
                            type={'number'}
                            onChange={onChangeAge}
                            readonly={readonly}

                        />
                    </div>
                </div>
                <div className={cls.row}>
                    <div className={cls.subtitle}>
                        <Text text={t('Город')}/>
                    </div>
                    <div className={cls.input}>
                        <Input
                            theme={InputTheme.PRIMARY}
                            value={data?.city}
                            onChange={onChangeCity}
                            readonly={readonly}
                        />
                    </div>
                </div>
                <div className={cls.row}>
                    <div className={cls.subtitle}>
                        <Text text={t('Логин')}/>
                    </div>
                    <div className={cls.input}>
                        <Input
                            theme={InputTheme.PRIMARY}
                            value={data?.username}
                            onChange={onChangeUsername}
                            readonly={readonly}
                        />
                    </div>
                </div>
                <div className={cls.row}>
                    <div className={cls.subtitle}>
                        <Text text={t('Ссылка на аватар')}/>
                    </div>
                    <div className={cls.input}>
                        <Input
                            theme={InputTheme.PRIMARY}
                            value={data?.avatar}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                        />
                    </div>
                </div>
                <div className={cls.row__selects}>
                    <div className={cls.select}>
                        <CurrencySelect
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}

                        />
                    </div>
                    <div className={cls.select}>
                        <CountrySelect
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readonly}

                        />
                    </div>

                </div>
            </div>
        </div>
  )
}
