
import { Button } from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

interface BugButtonProps {
  className?: string
}
// кнопка ошибки (тестовая кнопка ее нет в проекте)
export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false)

  const onThrow = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  const { t } = useTranslation()
  return (
        <Button onClick={onThrow}
                >
            {t('Throw an error')}
        </Button>
  )
}

export default BugButton
