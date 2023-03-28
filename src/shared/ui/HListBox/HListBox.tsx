import cls from './HListBox.module.scss'
import { Fragment, memo, ReactNode, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import { HStack } from '../Stack'

export interface HListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';
interface HListBoxProps {
    items?: HListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop
}

export const HListBox = memo((props: HListBoxProps) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom',
    label
  } = props

  const optionsClasses = [mapDirectionClass[direction]]
  return (
        <HStack gap={'8'}>
             {label && <span>{`${label}`}</span>}
            <Listbox
                disabled={readonly}
                as={'div'}
                     className={classNames(cls.HListBox, {}, [className])}
                     value={value}
                     onChange={onChange}
            >
                <Listbox.Button disabled={readonly} className={classNames(cls.selected, {}, [className])}>
                        {value ?? defaultValue}
                </Listbox.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Listbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                        {items?.map((item) => (
                            <Listbox.Option
                                key={item.value}
                                value={item.value}
                                as={Fragment}
                                disabled={item.disabled}
                            >
                                {({ active, selected }) => (
                                    <li className={classNames(cls.item,
                                      { [cls.active]: active, [cls.disabled]: item.disabled })}
                                    >
                                        {item.content}
                                        {selected && '+'}
                                    </li>
                                )}
                            </Listbox.Option>
                        ))}

                    </Listbox.Options>
                </Transition>
            </Listbox>
        </HStack>

  )
})
