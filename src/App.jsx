import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import DigitalProducts from "./components/pages/DigitalProducts";
import PageLayout from "./components/common/PageLayout";
import Examples from "./components/pages/Examples";
import Features from "./components/pages/Features";
import Pricing from "./components/pages/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <DigitalProducts />,
      },
      {
        path: "examples",
        element: <Examples />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
