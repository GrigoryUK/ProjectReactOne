import { classNames } from '@/shared/lib/classNames/classNames'
import React, { memo, useMemo, useState } from 'react'
import cls from './Sidebar.module.scss'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const SidebarItemsList = useSelector(getSidebarItems)
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
  )), [SidebarItemsList, collapsed])
  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <div className={cls.Sidebar__links}>
          {itemsList}
      </div>
      <Button size={ButtonSize.M} theme={ButtonTheme.COLLAPSE} className={classNames(cls.Sidebar__btn)} data-testid="sidebar-toggle" onClick={onToggle}>
          {collapsed ? '>' : '<'}
      </Button>

    </div>
  )
})
