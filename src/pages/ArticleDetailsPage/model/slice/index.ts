import { combineReducers } from '@reduxjs/toolkit'
import { ArticleDetailPageSchema } from '../types'
import { ArticleDetailRecommendsReducer } from './ArticleDetailRecommendsSlice'
import { ArticleDetailCommentsReducer } from './ArticleDetailCommentsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailPageSchema>({
  recommends: ArticleDetailRecommendsReducer,
  comments: ArticleDetailCommentsReducer
})
