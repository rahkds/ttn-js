import { createContext, useState, useEffect } from 'react';
import {gql, useQuery} from "@apollo/client";
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const COLLECTIONS = gql`
  query {
    collections {
      id
      title,
      items {
        id,name,price,imageUrl
      }
    }    
  }
`;

export const CategoriesProvider = ({ children }) => {
  const {loading, error, data} = useQuery(COLLECTIONS);
  console.log(loading, error, data);
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(async() => {
    if(data) {
      const {collections} = data;
      const collectionsMap = collections.reduce((acc, collection) => {
        const {title, items} = collection;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {});
     // await new Promise(resolve => setTimeout(resolve,3000));
      setCategoriesMap(collectionsMap);
    }
    
  }, [data]);

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoryMap = await getCategoriesAndDocuments();
  //     setCategoriesMap(categoryMap);
  //   };

  //   getCategoriesMap();
  // }, []);

  const value = { categoriesMap, loading };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
