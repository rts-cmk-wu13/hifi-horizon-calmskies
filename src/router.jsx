import { createBrowserRouter } from "react-router";
import Layout from "./Layout";

import Home from "./pages/Home";
import List from "./pages/List";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { getProduct, getProducts } from "./api/products";
import Loading from "./Components/Loading";
import Error from "./Components/Error";
import { contactAction } from "./routes/contactAction";
import Login from "./pages/Login";
import RequireAuth from "./Components/RequireAuth";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <Loading />, // This will show a loading state while the data is being fetched
        errorElement: <Error />, // This will show a NotFound component if there's an error
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "list",
                element: <List />,
                loader: getProducts // This will fetch users data when the Home component is loaded
            },
            {
                path: "list/:id",
                element: <Detail />,
                loader: getProduct
            },
            {
                path: "about",
                element: <About />,

            },
            {
                path: "contact",
                element: <Contact />,
                action: contactAction
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }

]);
export default router;