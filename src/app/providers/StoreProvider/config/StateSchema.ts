import { CounterSchema } from '@/entities/Counter'
import { UserSchema } from '@/entities/User'
import { LoginSchema } from '@/features/AuthByUserName'
import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { CombinedState } from 'redux'
import { ArticleDetailsSchema } from '@/entities/Article'
import { AxiosInstance } from 'axios'
import { ArticleDetailPageSchema } from '@/pages/ArticleDetailsPage'
import { addCommentFormSchema } from '@/features/addCommentForm'
import { ArticlesPageSchema } from '@/pages/ArticlesPage'
import { scrollSaveSchema } from '@/features/ScrollSave'
import { rtkApi } from '@/shared/api/rtkApi'
import { ProfileSchema } from '@/features/editableProfileCard'

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    saveScroll: scrollSaveSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
    // Async Reducer
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: addCommentFormSchema
    articlesPage?: ArticlesPageSchema
    articleDetailsPage?: ArticleDetailPageSchema
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    // true - вмонтирован, false - невмонтирован
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    // navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema

}
