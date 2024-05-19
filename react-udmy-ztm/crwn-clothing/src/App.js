// import Home from "./routes/home/home.route";
import React from "react";
import {Routes, Route, Outlet} from 'react-router-dom';
// import Navigation from "./routes/navigation/navigation.component";
// import Authentication from './routes/authentication/authentication.component';
// import Shop from "./routes/shop/shop.component";
// import Checkout from "./components/checkout/checkout.component";


// import Navigation from "./routes/navigation/navigation.component";
// import Authentication from './routes/authentication/authentication.component';
// import Shop from "./routes/shop/shop.component";
// import Checkout from "./components/checkout/checkout.component";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Spinner from "./components/spinner/spinner.component";
import {GlobalStyle} from "./global.style";

const Home = React.lazy(() => import('./routes/home/home.route'));
const Navigation = React.lazy(() => import("./routes/navigation/navigation.component"));
const Authentication = React.lazy(() => import('./routes/authentication/authentication.component'));
const Shop = React.lazy(() => import("./routes/shop/shop.component"));
const Checkout = React.lazy(() => import("./components/checkout/checkout.component"));




const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //     if(user) {
    //         createUserDocumentFromAuth(user);
    //     }
    //     dispatch(setCurrentUser(user));
    // });
    // return unsubscribe;
}, [])

 return (
    <React.Suspense fallback={<Spinner/>}>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </React.Suspense>

  );
}

export default App;
