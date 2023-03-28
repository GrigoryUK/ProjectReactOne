import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { memo, ReactNode, useCallback } from 'react'
import { Button, ButtonTheme } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import IconCopy from 'shared/assets/icons/copy.svg'

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
  const {
    className,
    text
  } = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])
  return (
      <pre className={classNames(cls.Code, {}, [className])}>
          <Button onClick={onCopy} className={cls.Code__copy} theme={ButtonTheme.CLEAR}>
              <Icon Svg={IconCopy} className={cls.Code__icon}/>
          </Button>
          <code>
            {text}
          </code>
      </pre>
  )
})
