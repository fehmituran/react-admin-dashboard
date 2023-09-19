import Home from 'pages/Home/Home';
import { Route,  Routes } from 'react-router-dom';
import Layouts from './Layouts/Layouts';
import '../styles/global.scss';
import Users from 'pages/Users/Users';
import Products from 'pages/Products/Products';
import User from 'pages/User/User';
import Product from 'pages/Product/Product';
import Login from 'pages/Login/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route
          path="/users"
          element={
            <Users /> 
          }
        />
        <Route
          path="/products"
          element={
            <Products /> 
          }
        />
        <Route
          path= "/user/:id"
          element={
            <User />
          }
        />
        <Route
          path= "/product/:id"
          element={
            <Product />
          }
        />
        <Route
          path= "/login"
          element={
            <Login />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );

  // const router = createBrowserRouter([

  //   {

  //     path: "/",
  //     element: <Layouts />,

  //     children: [
  //       {
  //         path: "/",

  //         element: <Home/>,
  //       },
  //       {
  //         path: "/users",
  //         element: <Users />,
  //       },
  //       {
  //         path: "/products",
  //         element: <Products />,
  //       },
  //       {
  //         path: "/users/:id",
  //         element: <User />,
  //       },
  //       {
  //         path: "/products/:id",
  //         element: <Product />,
  //       },
  //     ]
  //    },
  //    {
  //     path:"/login",
  //     element:<Login/>
  //    }

  // ]);

  // return <RouterProvider router={router} />;
};
