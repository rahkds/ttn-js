import {categoriesReducer, CATEGORIES_INITIAL_STATE} from '../category.reducer';

import {fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess} from '../category.action';

describe('Category Reducer', () => {
    test("fetchCategoriesStart", () => {
        let expectedState = {
            ...CATEGORIES_INITIAL_STATE,
            isLoading : true
        }

        expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())).toEqual(expectedState);
    });


    test("fetchCategoriesSuccess", () => {
        let mockData = [
            {
                title : 'mens',
                imageUrl : 'test',
                items : [
                    {
                        id : 1,
                        imageUrl : 'test',
                        name : 'Product 1'
                    }
                ]
            }

        ];

        let expectedState = {
            ...CATEGORIES_INITIAL_STATE,
            isLoading : false,
            categories : mockData
        }

        expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesSuccess(mockData))).toEqual(expectedState);
    });
    

    test("fetchCategoriesSuccess", () => {
        let error = new Error("Error");

        let expectedState = {
            ...CATEGORIES_INITIAL_STATE,
            isLoading : false,
            error : error
        }

        expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesFailed(error))).toEqual(expectedState);
    });    
});