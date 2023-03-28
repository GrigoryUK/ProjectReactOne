import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { Portal } from '../Portal/Portal'

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;

    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props
  const [isMounted, setIsMounted] = useState(false)

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseHandler()
    }
  }, [onCloseHandler])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
      setIsMounted(true)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Mods = {
    [cls.opened]: isOpen

  }

  if (lazy && !isMounted) {
    return null
  }
  return (
      <Portal>
          <div className={classNames(cls.Modal, mods, [className])}>
              <div className={cls.Modal__overlay} onClick={onCloseHandler}>
                  <div className={cls.Modal__content} onClick={onContentClick}>
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  )
}
