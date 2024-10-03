import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import TelegramUI from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

// Layout component for wrapping routes
function Layout() {
  return (
    <div className="bg-[#121212] min-h-screen">
      {/* Add any common layout components like Header, Sidebar, etc., here */}
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
}

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // The layout that wraps the routes
    children: [
      {
        path: "/", // Home path
        element: <TelegramUI />, // Your TelegramUI component
      },

      {
        path: "xyz/:id", // Home path
        element: <ChatPage />, // Your TelegramUI component
      },
      // Add more routes here if needed
    ],
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
