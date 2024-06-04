import {selectCategories,
    selectCategoriesMap, selectCategoriesIsLoading
} from '../category.selector';


const mockState = {
    categories : {
        isLoading : false,
        categories : [
            {
                title : 'mens',
                imageUrl : 'test',
                items : [
                    {id : 1, name : "Product 1"},
                    {id : 2, name : "Product 2"},
                ]
            },
            {
                title : 'womens',
                imageUrl : 'test',
                items : [
                    {id : 3, name : "Product 3"},
                    {id : 4, name : "Product 4"},
                ]
            }            
        ]
    }
}

describe('Category Selector Test', () => {
    test('it should return categories', () => {
        const categoriesSlice =  selectCategories(mockState);
        expect(categoriesSlice).toEqual(mockState.categories.categories);
    });

    test('it should return false as isLoading false', () => {
        const isLoading =  selectCategoriesIsLoading(mockState);
        expect(isLoading).toEqual(false);
    });    

    test('selectCategoriesMap should convert the items array into approriate map', () => {
       let expectedCategoriesMap = {
        mens : [
            {id : 1, name : "Product 1"},
            {id : 2, name : "Product 2"}          
        ],
        womens : [
            {id : 3, name : "Product 3"},
            {id : 4, name : "Product 4"}            
        ]
       };
       let categoriesMap = selectCategoriesMap(mockState);
       expect(categoriesMap).toEqual(expectedCategoriesMap);
    });
});