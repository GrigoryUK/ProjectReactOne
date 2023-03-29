import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Popups.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, ReactNode } from 'react'
import { Popover } from '@headlessui/react'

export type DropdownDirection = 'top left' | 'top right' | 'bottom left' | 'bottom right';
interface PopupsProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children?: ReactNode;
}

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft
}

export const Popups = memo((props: PopupsProps) => {
  const {
    className,
    direction = 'bottom right',
    trigger,
    children
  } = props
  const { t } = useTranslation()
  const optionsClasses = [mapDirectionClass[direction]]
  return (
    <div className={classNames(cls.Popups, {}, [className])}>
      <Popover className="relative">
        <Popover.Button className={cls.trigger}>{trigger}</Popover.Button>

        <Popover.Panel className={classNames(cls.options, {}, optionsClasses)} >
          {children}
        </Popover.Panel>
      </Popover>
    </div>
  )
})
