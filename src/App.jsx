import { useEffect, useState } from "react";
import { Outlet, Route, RouterProvider, createHashRouter, createRoutesFromElements } from "react-router-dom";
import Navbar from "./compenent/router/Navbar";
import Home from "./compenent/home/Home";
const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Routes />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<p>shop</p>} />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
function Routes() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, []);
  return (
    <>
      {loader ? (
        "loading"
      ) : (
        <>
          <Navbar />
          <Outlet />
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}
export default App;
