import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './RatingCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import { StartRating } from '@/shared/ui/StartRating/StartRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (startsCount: number) => void;
  onAccept?: (startsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept
  } = props
  const { t } = useTranslation()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [startCount, setStartCount] = useState(0)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStartCount(selectedStarsCount)
    if (hasFeedback) {
      setIsOpenModal(true)
    } else {
      onAccept?.(selectedStarsCount)
    }
    setIsOpenModal(true)
  }, [hasFeedback, onAccept])

  const acceptHandler = useCallback(() => {
    setIsOpenModal(false)
    onAccept?.(startCount, feedback)
  }, [feedback, onAccept, startCount])

  const cancelHandler = useCallback(() => {
    setIsOpenModal(false)
    onCancel?.(startCount)
  }, [onCancel, startCount])

  const modalContent = (
    <VStack max gap={'16'}>
      <Text title={feedbackTitle}/>
      <Input value={feedback}
             onChange={setFeedback}
             placeholder={t('оставляя отзыв, вы продвигаете статью')}
      />
      <HStack max gap={'16'}>
        <Button
          onClick={acceptHandler}
          max theme={ButtonTheme.OUTLINE_SUCCESS}>
          {t('Отправить')}
        </Button>
        <Button
          onClick={cancelHandler}
          max theme={ButtonTheme.OUTLINE_ERROR}>
          {t('Не хочу')}
        </Button>
      </HStack>
    </VStack>
  )

  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}>
        <VStack gap={'16'} max>
            <Text title={title}/>
            <StartRating size={40} onSelect={onSelectStars}/>
        </VStack>
        <BrowserView>
          <Modal isOpen={isOpenModal} onClose={cancelHandler}>
            {modalContent}
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isOpenModal} onClose={cancelHandler}>
            {modalContent}
          </Drawer>
        </MobileView>
    </Card>
  )
})
