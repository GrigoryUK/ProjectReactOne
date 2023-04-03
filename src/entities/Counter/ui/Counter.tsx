import { useTranslation } from 'react-i18next'

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/counterSlice'

import { Button, ButtonTheme } from '@/shared/ui/Button'

export const Counter = () => {
  const counterValue = useCounterValue()
  const { t } = useTranslation()
  const { decrement, increment, add } = useCounterActions()
  const incrementHandler = () => {
    increment()
  }

  const decrementHandler = () => {
    decrement()
  }

  const HandlerAddFive = () => {
    add(5)
  }

  return (
        <div >
            <h1 data-testid="value-title"> {counterValue}</h1>
            <Button theme={ButtonTheme.OUTLINE} onClick={incrementHandler} data-testid="btn-increment">
                {t('increment')}
            </Button>
            <Button theme={ButtonTheme.OUTLINE} onClick={decrementHandler} data-testid="btn-decrement">
                {t('decrement')}
            </Button>
        </div>
  )
}
