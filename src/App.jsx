import DashBoard from "./Pages/DashBoard/DashBoard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transactions from "./Pages/Transactions/Transactions";
import Support from "./Pages/Support/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
