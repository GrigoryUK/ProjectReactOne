import { Dispatch } from '@reduxjs/toolkit'

import { ValidateProfileError } from '../../types/editableProfileCardSchema'

import { validateProfileData } from './validateProfileData'

import { StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

describe('validateProfileData.test', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })

  const data = {
    username: 'admin',
    lastname: '123',
    first: '123',
    country: Country.Belarus,
    currency: Currency.RUB,
    city: '123',
    age: 22
  }

  test('success', async () => {
    const result = validateProfileData(data)
    expect(result).toEqual([])
  })
  test('error name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' })
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })
  test('error country', async () => {
    const result = validateProfileData({ ...data, country: undefined })
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY
    ])
  })
  test('error all', async () => {
    const result = validateProfileData({ })
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ])
  })
})
