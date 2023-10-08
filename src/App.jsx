import { useState } from "react";
import { RouterProvider } from "react-router-dom";
const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Routes />}>
        <Route index element={<p>home</p>} />
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

  const dispatch = useDispatch();
  useEffect(() => {
    setLoader(false);
  }, []);
  return (
    <>
      {loader ? (
        "loading"
      ) : (
        <>
          {/* <Navbar /> */}
          <Outlet />
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}
export default App;
