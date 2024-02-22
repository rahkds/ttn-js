import Home from "./routes/home/home.route";
import {Routes, Route, Outlet} from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.route";
import Sign from "./routes/sign-in/sign-in.componenet";


const Shop = () => {
  return <h1>I am the shop page</h1>;
}

const App = () => {

 return (
    <Routes>
        <Route path='/' element={<Navigation/>} >
            <Route index element={<Home/>} />
            <Route path='shop' element={<Shop/>} />
            <Route path='sign-in' element={<Sign/>} />
        </Route>    
    </Routes>
  );
}

export default App;
