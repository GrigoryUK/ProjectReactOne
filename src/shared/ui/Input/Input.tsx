import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

import cls from './Input.module.scss'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'theme' | 'size' | 'readOnly'>

export enum InputTheme {

    CLEAR = 'clear',
    PRIMARY = 'primary',

}

export enum InputSize {
    M = 'size_m',
    L = 'size_l',
    X = 'size_x'
}

interface InputProps extends HtmlInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    theme?: InputTheme;
    size?: InputSize;
    autofocus?: boolean;
    readonly?: boolean;

}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    theme = InputTheme.PRIMARY,
    size = InputSize.M,
    readonly,
    autofocus,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const onFocusHandler = () => {
    setIsFocused(true)
  }

  const onBlurHandler = () => {
    setIsFocused(false)
  }

  const mods: Mods = {
    [cls.readonly]: readonly
  }

  return (
        <input
            className={classNames(cls.Input, mods, [className, cls[theme], cls[size]])}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChangeHandler}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            autoFocus={autofocus}
            readOnly={readonly}
            {...otherProps}
            />

  )
})
