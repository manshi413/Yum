import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contactus.js";
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import ResMenu from "./components/ResMenu.js";


const Grocery = lazy(() => import("./components/Grocery.js"))

const AppLayout = () => {
    return (
        <div className= "app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:  [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact-us",
                element: <Contact/>
            },
            {
                path: "/cart",
                element:<Cart/>
            },
            {
                path: "/Grocery",
                element: <Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
            },
            {
                path: "/restaurants/:ResId",
                element: <ResMenu/>
            }
        ],
        errorElement: <Error/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);




















// const heading = React.createElement("h1",
//     {
//         id: "heading",
//         xyz: "random"
//     },
//     "Hello World from React and App.js");


// React Element
// React.createElement ==> Object ==> HTMLElement(render)

//JSX
//--JSX makes life easy
// const jsxHeading = (< h1 id="heading"
//     className="head" tabIndex= "5" >
//     Namaste React using JSX 
//     You can write here whatever</h1>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); 

// React Component
//--> we are going to use functional Component
// const HeadingComponent = () => {
//     return (
//         <h1>
//             Namaste React using React Component
//         </h1>
//     )    
// };
// const Heading = () => (
//     <h2 className="random">
//         It's a new things
//     </h2>
// )
// const Title = () => (
//     <h1 className="random">
//         Another Nested Things
//     </h1>
// )
// const random = (
//     <h1>
//         New way to nest things
//     </h1>
// )
// const number = 10000;
// const HeadingComponent = () => (
//     <div id = "container">
//         {random}
//         <h1> {number} </h1>
//         <Heading/>
//         <h1 id = "heading">
//         Namaste React with React Component
//     </h1>
//     <Title/>
//     </div>
    
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);

