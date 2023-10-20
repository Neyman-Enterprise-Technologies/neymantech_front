import { FaQq } from "react-icons/fa";
import About from "../pages/Site/About/About";
import Blogs from "../pages/Site/Blogs/Blogs";
import Contact from "../pages/Site/Contact/Contact";
import Home from "../pages/Site/Home/Home";
import Price from "../pages/Site/Price/Price";
import Project from "../pages/Site/Project/Project";
import Service from "../pages/Site/Service/Service";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
// import Faq from "../pages/Site/Faq/Faq";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import Accordion from "../pages/Site/Accordion/Accordion"
// import Pagination from "../Components/pagination/pagination";


export const ROUTES = [
    {
      path: "/",
      element: < SiteRoot/>,
      children: [
        {
          path: "",
          element: < Home/>,
        },
        {
          path: "/home",
          element: < Home/>,
        },
        {
            path: "/about",
            element: < About/>,
          },  
          {
            path: "/service",
            element: < Service/>,
          },
          {
            path: "/price",
            element: < Price/>,
          },
          {
            path: "/blogs",
            element: < Blogs/>,
          },
          {
            path: "/blogs/:id",
            element: < BlogDetails/>,
          },
          {
            path: "/project",
            element: < Project/>,
          },
          {
            path: "/contact",
            element: < Contact/>,
          },
          {
            path: "/faq",
            element: < Accordion/>,
          },
          {
            path:"/paginate",
            // element:<Pagination/>
          }
      ],
    },
]