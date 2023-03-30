import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Comment } from '@/entities/Comment'

import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails'
import {
  fetchCommentsByArticleId
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>>(
      'ArticleDetailsPage/addCommentForArticle',
      async (text, thunkAPI) => {
        const { extra, rejectWithValue, dispatch, getState } = thunkAPI

        const userData = getUserAuthData(getState())
        const article = getArticleDetailsData(getState())

        if (!userData || !text || !article) {
          return rejectWithValue('no data')
        }
        try {
          const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text
          })

          dispatch(fetchCommentsByArticleId(article.id))

          if (!response.data) {
            throw new Error()
          }

          return response.data
        } catch (e) {
          return rejectWithValue('error')
        }
      }
    )
