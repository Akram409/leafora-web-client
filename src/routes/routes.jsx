import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
//   {
//     path: "/dashboard",
//     element: (
//       <PrivateRoute>
//         <DashboardLayout />
//       </PrivateRoute>
//     ),
//     children: [
//       {
//         path: "/dashboard/overview",
//         element: <Overview />,
//       },
//       // Buyer Routes
//       {
//         path: "/dashboard/wishlist",
//         element: <BuyerRoute><MyWishList /></BuyerRoute>,
//       },
//       // Seller Routes
//       {
//         path: "/dashboard/my-products",
//         element: <SellerRoute><MyProducts /></SellerRoute>,
//       },
//     ],
//   },
]);
