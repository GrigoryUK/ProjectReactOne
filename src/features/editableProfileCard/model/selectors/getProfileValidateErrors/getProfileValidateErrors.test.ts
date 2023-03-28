import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from '../../types/editableProfileCardSchema'

describe('getProfileIsLoading.test', () => {
  test('should return error', () => {
    const errors = [
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE
    ]
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: errors
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
