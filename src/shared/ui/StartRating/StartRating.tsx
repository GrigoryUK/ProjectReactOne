import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Icon } from '../Icon/Icon'

import cls from './StartRating.module.scss'

import StarIcon from '@/shared/assets/icons/star.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

interface StartRatingProps {
  className?: string;
  onSelect?: (startsCount: number) => void;
  size?: number;
  selectedStarts?: number;

}

const starts = [1, 2, 3, 4, 5]
export const StartRating = memo((props: StartRatingProps) => {
  const {
    className,
    onSelect,
    size = 32,
    selectedStarts = 0

  } = props
  const { t } = useTranslation()
  const [isHovered, setIsHovered] = useState(false)
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStarts)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStarts))

  const onHover = (starCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }
  return (
    <div className={classNames(cls.StartRating, {}, [className])}>
      {starts.map(starNumber => (
        <Icon
          className={
          classNames(cls.star,
            { [cls.selected]: isSelected },
            [currentStarsCount >= starNumber ? cls.hovered : cls.normal])}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  )
})
