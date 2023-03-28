import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Dropdown.module.scss'
import { useTranslation } from 'react-i18next'
import { Fragment, memo, ReactNode } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
}

export const Dropdown = memo((props: DropdownProps) => {
  const {
    className,
    items,
    trigger
  } = props
  const { t } = useTranslation()
  return (
      <Menu as='div' className={classNames(cls.Dropdown, {}, [className])}>
          <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
          <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
          >
              <Menu.Items className={cls.items} >
                  {items.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => (
                          <button
                              type="button"
                              disabled={item.disabled}
                              onClick={item.onClick}
                              className={classNames(cls.item, { [cls.active]: active })}
                          >
                              {item.content}
                          </button>
                    )

                    if (item.href) {
                      return (
                              <Menu.Item as={Link} to={item.href} key={index} disabled={item.disabled}>
                                  {content}
                              </Menu.Item>
                      )
                    }

                    return (
                          <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
                              {content}
                          </Menu.Item>
                    )
                  })}

              </Menu.Items>
          </Transition>
      </Menu>
  )
})
