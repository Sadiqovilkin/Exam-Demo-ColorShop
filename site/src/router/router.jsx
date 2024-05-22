import AddPage from "../pages/client/AddPage/A/AddPage";
import Basket from "../pages/client/Basket/Basket";
import ClientRoot from "../pages/client/ClientRoot";
import Home from "../pages/client/Home/Home";
import Wishlist from "../pages/client/Wishlist/Wishlist";


export const ROUTER = [
    {
        path:"/",
        element:<ClientRoot/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"add-page",
                element:<AddPage/>
            },
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"wishlist",
                element:<Wishlist/>
            },
        ]
    }
]