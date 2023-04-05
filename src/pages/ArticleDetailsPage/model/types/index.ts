import { articleDetailCommentsSchema } from '../types/articleDetailCommentsSchema';
import { ArticleDetailRecommendsSchema } from '../types/articleDetailRecommendsSchema';
export interface ArticleDetailPageSchema {
    comments: articleDetailCommentsSchema;
    recommends: ArticleDetailRecommendsSchema;
}
