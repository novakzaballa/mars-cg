import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import ErrorPage from "./Error";
import { WorkoutPage, loader as workoutLoader } from "../components/WorkoutPage/WorkoutPage";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Navigate to="/dashboard" replace={true} />
        }
      >
      </Route>
      <Route element={<App />} path={'/dashboard'} errorElement = {<ErrorPage/>}>
      </Route>
      <Route element={<WorkoutPage />} path='workouts/:workoutId' errorElement = {<ErrorPage/>} loader={workoutLoader}/>
    </>
  )
);
