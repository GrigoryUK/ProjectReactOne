import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchRecommends } from '../services/fetchRecommends/fetchRecommends';
import { ArticleDetailRecommendsSchema } from '../types/articleDetailRecommendsSchema';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

const recommendsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleDetailRecommends =
    recommendsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommends ||
            recommendsAdapter.getInitialState(),
    );

const ArticleDetailRecommendsSlice = createSlice({
    name: 'ArticleDetailRecommendsSlice',
    initialState:
        recommendsAdapter.getInitialState<ArticleDetailRecommendsSchema>({
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommends.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchRecommends.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchRecommends.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: ArticleDetailRecommendsReducer } =
    ArticleDetailRecommendsSlice;
