import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import WeaponsHome from "./pages/WeaponHome";
import DisplayWeapons from "./pages/DisplayWeapons";
import WeaponsNew from "./pages/WeaponNew";
import WeaponsShow from "./pages/WeaponShow";
import { WeaponsLoader, WeaponsShowLoader } from "./Loaders";
import { createAction, updateAction, deleteAction } from "./Actions";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<WeaponsHome />} />
        <Route
          path="weapons"
          element={<DisplayWeapons />}
          loader={WeaponsLoader}
        />
        <Route path="weapons/:id" element={<WeaponsShow />} loader={WeaponsShowLoader} />
        <Route path="weapons/new" element={<WeaponsNew />} />
        <Route path="weapons/create" action={createAction}/>
        <Route path="weapons/update/:id" action={updateAction}/>
        <Route path="weapons/delete/:id" action={deleteAction}/>
      </Route>
    </>
  )
);

export default Router;
