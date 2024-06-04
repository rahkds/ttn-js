import {testSaga} from 'redux-saga-test-plan'
import {takeLatest, all, call, put} from 'typed-redux-saga/macro';
import { CATEGORIES_ACTION_TYPES } from '../category.types';

import {fetchCategoriesAsync, onFetchCategories, categoriesSaga} from '../category.saga';

describe("Category Saga Test", () => {
    test("categoriesSaga", () => {
        testSaga(categoriesSaga)
        .next()
        .all([call(onFetchCategories)])
        .next()
        .isDone();
    });

    test("onFetchCategories", () => {
        testSaga(onFetchCategories)
        .next()
        .takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
        .next()
        .isDone()
    });
})