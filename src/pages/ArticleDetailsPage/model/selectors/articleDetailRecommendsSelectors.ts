import { StateSchema } from '@/app/providers/StoreProvider'

export const ArticleDetailRecommendsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommends?.isLoading || false
export const ArticleDetailRecommendsError = (state: StateSchema) => state.articleDetailsPage?.recommends?.error
