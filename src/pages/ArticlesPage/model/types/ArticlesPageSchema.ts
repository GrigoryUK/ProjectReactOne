import { EntityState } from '@reduxjs/toolkit'

import { Article, ArticleType, ArticleView, ArticleSortField } from '@/entities/Article'
import { SortOrder } from '@/shared/types'

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    _init: boolean
    // pagination
    page: number
    limit?: number
    hasMore: boolean

    // filter
    view: ArticleView
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType;
}
