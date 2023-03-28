import { ArticleDetailRecommendsSchema } from '../types/articleDetailRecommendsSchema'
import { articleDetailCommentsSchema } from '../types/articleDetailCommentsSchema'
export interface ArticleDetailPageSchema {
    comments: articleDetailCommentsSchema;
    recommends: ArticleDetailRecommendsSchema;
}
