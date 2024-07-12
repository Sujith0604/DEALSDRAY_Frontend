import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingPage from "./Pages/LoadingPage";

const EmployeList = lazy(() => import("./Pages/EmployeList"));
const UpdateEmployee = lazy(() => import("./Pages/UpdateEmployee"));
const Login = lazy(() => import("./Pages/Login"));
const DashBoard = lazy(() => import("./Pages/DashBoard"));
const AppLayout = lazy(() => import("./AppLayout"));
const HomeDash = lazy(() => import("./Pages/HomeDash"));
const AddAdmin = lazy(() => import("./Pages/AddAdmin"));

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="/dashboard/home" element={<HomeDash />} />
            <Route path="/dashboard/employees" element={<EmployeList />} />
            <Route
              path="/dashboard/employees/update/:id"
              element={<UpdateEmployee />}
            />
            <Route path="/dashboard/addadmin" element={<AddAdmin />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
