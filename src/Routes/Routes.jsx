import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Travel from "../Components/Travel";
import TravelInfo from "../Components/TravelInfo";


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
            }
        ]
    }
])

export default routes;