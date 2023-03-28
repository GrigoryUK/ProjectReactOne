import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

// SelectOption<T extends string> создаем гибко настраевымый дженерик (плохо работает с memo), теперь мы можем определять тип снажури
export interface SelectOption<T extends string> {
    value: T;
    content: string;
}
interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];

    value?: T;
    readonly?: boolean;
    onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, onChange, value, readonly } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T)
    }
  }

  const optionsList = useMemo(() => options?.map((opt) => (
      <option
          className={cls.option}
          value={opt.value}
          key={opt.value}
      >
          {opt.content}
      </option>
  )), [options])

  return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (<span className={cls.label}>{label}</span>)}
            <select
                className={cls.select}
                value={value}
                disabled={readonly}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
  )
}
