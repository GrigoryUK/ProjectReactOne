import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from '../../model/types/currency'
import React, { memo, useCallback } from 'react'
import { HListBox } from 'shared/ui/HListBox/HListBox'

interface CurrencySelectProps {
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}
const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
]
export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { t } = useTranslation('profile')
  const { value, onChange, readonly } = props

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
        <HListBox
            value={value}
            defaultValue={t('Валюта')}
            label={t('Валюта')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top"
        />

  )
})
