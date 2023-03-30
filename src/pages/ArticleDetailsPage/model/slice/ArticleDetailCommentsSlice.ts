import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Comment } from '@/entities/Comment'
import { StateSchema } from '@/app/providers/StoreProvider'
import {
  fetchCommentsByArticleId
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailCommentsSchema } from '../types/articleDetailCommentsSchema'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

const ArticleDetailCommentsSlice = createSlice({
  name: 'ArticleDetailCommentsSlice',
  initialState: commentsAdapter.getInitialState<articleDetailCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false
        commentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: ArticleDetailCommentsReducer } = ArticleDetailCommentsSlice
