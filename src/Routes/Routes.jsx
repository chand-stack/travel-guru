import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Travel from "../Components/Travel";
import TravelInfo from "../Components/TravelInfo";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Hotel from "../Components/Hotel";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Travel></Travel>,
                loader:() => fetch('/travel.json')
            },
            {
                path:"/trave/:id",
                element:<TravelInfo></TravelInfo>,
                loader:() => fetch('/travel.json')
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/hotel",
                element:<Hotel/>
            }
        ]
    }
])

export default routes;