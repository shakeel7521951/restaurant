import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
<<<<<<< HEAD
import "./App.css"
=======
import Menu from "./pages/Menu";

>>>>>>> 8b23f32ab95f70ec2ca69c8c71714269cef3e29a
const MainFunction = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MainFunction />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/menu", element: <Menu /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
