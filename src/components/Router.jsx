import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout';
import { Home } from '../pages/home';
import { Country } from '../pages/country';
import { Details, detailedCountry } from '../pages/details';
import { Tops } from '../pages/tops';
import {Error} from '../pages/error';

export const Router = () => {
    const router = createBrowserRouter([
        {
            path : "/",
            element : <Layout/>,
            errorElement : <Error/>,
            children : [
                {
                    path : "/",
                    element : <Home/>
                },
                {
                    path : "/country",
                    element : <Country/>,
                },
                {
                    path : "/tops",
                    element : <Tops/>,
                },
                {
                    path : "/country/:name",
                    element : <Details/>,
                    loader : detailedCountry,
                },
            ],
        },
    ])
    return <RouterProvider router={router}/>
}