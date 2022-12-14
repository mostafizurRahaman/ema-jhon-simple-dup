import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/About/About';
import './App.css';
import Inventory from './component/Inventory/Inventory';
import Main from './component/Layout/Main';
import Orders from './component/Orders/Orders';
import Shop from './component/Shop/Shop';
import { ProductAndCartLoader } from './Loader/ProductAndCartLoader';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import PrivateRoutes from './Routes/PrivateRoutes';
import PayNow from './component/PayNow/PayNow';

function App() {

  const router = createBrowserRouter([
   {path: '/', element: <Main></Main>, children: [
    {
      path:"/", 
      // loader: ()=> fetch('http://localhost:5000/products'),
      element: <Shop></Shop>
    },
    {
      path:'/shop', 
      // loader: ()=> fetch('http://localhost:5000/products'),
      element: <Shop></Shop>
    }, 
    {path:"/inventory", element:<PrivateRoutes><Inventory></Inventory></PrivateRoutes>},
    {path:"/pay-now", element:<PrivateRoutes><PayNow></PayNow></PrivateRoutes>},
    {path:'/orders',     
    element: <Orders></Orders>,
    loader: ProductAndCartLoader, 
  },
    {path: '/about', element: <About></About>},
    {path:'/login', element: <Login></Login>}, 
    {path:'/register', element: <Register></Register>},
    {path:"*" , element: <h1> 400 Error Held</h1>}
   ]}
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
