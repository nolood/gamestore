import {CATALOG_ROUTE, GAME_ROUTE, HOME_ROUTE} from "./utils/consts";
import HomePage from "./pages/Homepage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: GAME_ROUTE + '/:id',
        Component: GamePage
    },
    {
        path: CATALOG_ROUTE + '/:page',
        Component: CatalogPage
    }
]