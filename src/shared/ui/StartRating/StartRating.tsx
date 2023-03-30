import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './StartRating.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useState } from 'react'
import { Icon } from '@/shared/ui/Icon/Icon'
import StarIcon from '@/shared/assets/icons/star.svg'
import { types } from 'sass'

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
  const [currentStarsCount, setCurrentStarsCount] = useState(0)
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
