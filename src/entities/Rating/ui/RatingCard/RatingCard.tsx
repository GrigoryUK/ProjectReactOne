import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import cls from './RatingCard.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StartRating } from '@/shared/ui/StartRating';
import { Text } from '@/shared/ui/Text';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (startsCount: number) => void;
    onAccept?: (startsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [startCount, setStartCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStartCount(selectedStarsCount);
            if (hasFeedback) {
                setIsOpenModal(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
            setIsOpenModal(true);
        },
        [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsOpenModal(false);
        onAccept?.(startCount, feedback);
    }, [feedback, onAccept, startCount]);

    const cancelHandler = useCallback(() => {
        setIsOpenModal(false);
        onCancel?.(startCount);
    }, [onCancel, startCount]);

    const modalContent = (
        <VStack max gap={'16'}>
            <Text title={feedbackTitle} />
            <Input
                data-testid={'RatingCard.Input'}
                value={feedback}
                onChange={setFeedback}
                placeholder={t('оставляя отзыв, вы продвигаете статью')}
            />
            <HStack max gap={'16'}>
                <Button
                    data-testid={'RatingCard.Send'}
                    onClick={acceptHandler}
                    max
                    theme={ButtonTheme.OUTLINE_SUCCESS}>
                    {t('Отправить')}
                </Button>
                <Button
                    data-testid={'RatingCard.Cancel'}
                    onClick={cancelHandler}
                    max
                    theme={ButtonTheme.OUTLINE_ERROR}>
                    {t('Не хочу')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card
            data-testid={'RatingCard'}
            className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align={'center'} gap={'16'} max>
                <Text title={startCount ? t('Ваша оценка') : title} />
                <StartRating
                    selectedStarts={startCount}
                    size={40}
                    onSelect={onSelectStars}
                />
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
    );
});
