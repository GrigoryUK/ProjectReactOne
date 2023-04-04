
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'

import cls from './AddCommentForm.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { TestProps } from '@/shared/types/tests'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Input, InputTheme } from '@/shared/ui/Input'

export interface AddCommentFormProps extends TestProps {
    className?: string;
    onSendComment: (text: string) => void;
}
const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}
const AddCommentForm = memo((props: AddCommentFormProps) => {
  const {
    className,
    onSendComment
  } = props
  const { t } = useTranslation()
  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
      <DynamicModuleLoader reducers={reducers}>
          <div data-testid={'AddCommentForm'} className={classNames(cls.AddCommentForm, {}, [className])}>
               <Input
                  data-testid={'AddCommentForm.Input'}
                  theme={InputTheme.PRIMARY}
                  className={cls.AddCommentForm__input}
                  value={text}
                  onChange={onCommentTextChange}
                  placeholder={t('введите ваш комментарий')}
               />
              <Button
                  data-testid={'AddCommentForm.Button'}
                  onClick={onSendHandler}
                  className={cls.AddCommentForm__btn}
                  theme={ButtonTheme.OUTLINE}
              >
                  {t('Отправить')}
              </Button>
          </div>
      </DynamicModuleLoader>

  )
})
export default AddCommentForm
