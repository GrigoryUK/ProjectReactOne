
import { EntityState } from '@reduxjs/toolkit'

import { Comment } from '@/entities/Comment'
export interface articleDetailCommentsSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;

}
