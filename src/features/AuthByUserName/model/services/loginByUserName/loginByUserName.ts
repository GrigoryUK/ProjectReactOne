import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { ThunkConfig } from 'app/providers/StoreProvider'

interface loginByUserNameProps {
    username: string,
    password: string
}
export const loginByUserName = createAsyncThunk<
    User,
    loginByUserNameProps,
    ThunkConfig<string>>(
      'login/loginByUserName',
      async (authData, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI
        try {
          const response = await extra.api.post<User>('/login', authData)

          if (!response.data) {
            throw new Error()
          }

          localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
          dispatch(userActions.setAuthData(response.data))
          return response.data
        } catch (e) {
          console.log(e)
          return rejectWithValue('error')
        }
      }
    )
