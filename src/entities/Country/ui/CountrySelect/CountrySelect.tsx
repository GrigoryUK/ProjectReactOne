import { useTranslation } from 'react-i18next'
import React, { memo, useCallback } from 'react'
import { Country } from '../../model/types/country'
import { HListBox } from 'shared/ui/HListBox/HListBox'

interface CountrySelectProps {
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus }
]
export const CountrySelect = memo((props: CountrySelectProps) => {
  const { t } = useTranslation()
  const { value, onChange, readonly } = props

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
        <HListBox
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Страна')}
            label={t('Страна')}
            items={options}
            readonly={readonly}
            direction="top"
        />

  )
})
