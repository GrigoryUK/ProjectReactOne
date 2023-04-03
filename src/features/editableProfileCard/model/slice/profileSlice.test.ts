import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { ProfileSchema, ValidateProfileError } from '../types/editableProfileCardSchema'

import { profileActions, profileReducer } from './profileSlice'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

describe('profileSlice.test', () => {
  const data = {
    username: 'admin',
    lastname: '123',
    first: '123',
    country: Country.Belarus,
    currency: Currency.RUB,
    city: '123',
    age: 22
  }
  test('readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(profileReducer(
        state as ProfileSchema,
        profileActions.setReadonly(true)))
      .toEqual({ readonly: true })
  })
  test('cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '', lastname: '' } }
    expect(profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit()))
      .toEqual({ readonly: true, validateError: undefined, data, form: data })
  })
  test('update Profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '' } }
    expect(profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: '1123'
        })))
      .toEqual({
        form: { username: '1123' }
      })
  })
  test('update Profile state: pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR]
    }
    expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.pending))
      .toEqual({
        isLoading: true,
        validateError: undefined
      })
  })
  test('update Profile state: fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true
    }
    expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')))
      .toEqual({
        isLoading: false,
        validateError: undefined,
        readonly: true,
        form: data,
        data
      })
  })
})
// profileActions
// profileReducer
