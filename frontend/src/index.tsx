import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import GraphPage from "./pages/GraphPage";
import AboutPage from "./pages/AboutPage";
import { ChakraProvider } from "@chakra-ui/react";
import NotFoundPage from "./pages/NotFoundPage";
import { LiveTranscript } from "./components/LiveTranscript";
import { NavigationContextProvider } from "./hooks/useNavigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GraphPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/transcript",
    element: <LiveTranscript transcript="hello world" />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <NavigationContextProvider>
        <RouterProvider router={router} />
      </NavigationContextProvider>
    </ChakraProvider>
  <