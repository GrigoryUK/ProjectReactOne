import { combineReducers } from '@reduxjs/toolkit'

import { ArticleDetailPageSchema } from '../types'

import { ArticleDetailCommentsReducer } from './ArticleDetailCommentsSlice'
import { ArticleDetailRecommendsReducer } from './ArticleDetailRecommendsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailPageSchema>({
  recommends: ArticleDetailRecommendsReducer,
  comments: ArticleDetailCommentsReducer
})
