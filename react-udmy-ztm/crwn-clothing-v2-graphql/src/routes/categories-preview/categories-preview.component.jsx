import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const { categoriesMap, loading } = useContext(CategoriesContext);

  if(loading) {
    return(
      <Fragment>
         <Spinner/>
      </Fragment>
    )
  }

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
