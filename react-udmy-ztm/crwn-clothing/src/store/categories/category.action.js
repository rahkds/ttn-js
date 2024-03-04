import { CATEGORIES_ACTION_TYPES } from "./category.types";


export const setCategoriesArray = (categoriesArray) => {
    return {type : CATEGORIES_ACTION_TYPES.SET_CATEGORIES, payload : categoriesArray};
}