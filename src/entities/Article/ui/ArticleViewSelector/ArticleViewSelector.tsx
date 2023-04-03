import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleView } from '../../model/consts/consts'

import cls from './ArticleViewSelector.module.scss'

import GridIcon from '@/shared/assets/icons/icon-grid.svg'
import ListIcon from '@/shared/assets/icons/icon-list.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: GridIcon
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon
  }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const {
    className,
    view,
    onViewClick
  } = props
  const { t } = useTranslation()

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button
                    className={classNames('', { [cls.notSelected]: viewType.view ! === view })}
                    key={index}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}>
                    <Icon Svg={viewType.icon} className={cls.ArticleViewSelector__icon}/>
                </Button>
            ))}
        </div>
  )
})
