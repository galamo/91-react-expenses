import React ,{ lazy, Suspense} from "react"
import { Button } from "primereact/button";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const LoginLazy = lazy(() => import('./components/pages/login'));
const NotFoundLazy = lazy(() => import('./components/pages/not-found'));
const RegisterLazy = lazy(() => import('./components/pages/register'));
const ExpensesLazy = lazy(() => import('./components/pages/expenses'));
const UsersLazy = lazy(() => import('./components/pages/users'));


// import Login from "./components/pages/login";
// import Register from "./components/pages/register";
// import Users from "./components/pages/users";
// import NotFound from "./components/pages/not-found";
// import Expenses from "./components/pages/expenses";

import "./App.css";
import ImageCp from "./components/ui/imageComponent";
interface IRoute {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>
  label: string;
  icon: string;
  isVisible?: boolean;
}
const routes: Array<IRoute> = [
  {
    path: "/login",
    component: LoginLazy,
    label: "Login Now",
    icon: "pi pi-login",
    isVisible: true,
  },
  {
    path: "/register",
    component: RegisterLazy,
    label: "Register here!",
    icon: "pi pi-sign-in",
    isVisible: true,
  },
  {
    path: "/",
    component: UsersLazy,
    label: "My Users!",
    icon: "pi pi-user",
    isVisible: true,
  },
  {
    path: "/expenses",
    component: ExpensesLazy,
    label: "My Expenses",
    icon: "pi pi-user",
    isVisible: true,
  },
  {
    path: "*",
    component: NotFoundLazy,
    label: "not found",
    icon: "pi pi-notfound",
  },
];

export default function App() {
  console.log("render all my application");
  return (
    <div>
      <ImageCp imageUrl="https://fiscalfitnessphx.com/wp-content/uploads/2019/10/The-4-Types-of-Expenses-You-Should-Include-In-Your-Budget.png"/>
      <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <AppLinks routes={routes} />
        <Routes>
          <>
            {routes.map((route: IRoute) => {
              return <Route key={route.path} path={route.path} Component={route.component} />;
            })}
          </>
        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

function AppLinks(props: { routes: Array<IRoute> }) {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
        width: "80%",
        margin: "auto",
        justifyContent: "space-between",
      }}
    >
      {props.routes
        .filter((r) => r.isVisible)
        .map((route: IRoute) => {
          return (
              <Link key={route.path} to={route.path}>
                <Button label={route.label} icon={route.icon} />
              </Link>
          );
        })}
    </div>
  );
}
