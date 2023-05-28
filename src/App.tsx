import { Button } from "primereact/button";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Users from "./components/pages/users";
import NotFound from "./components/pages/not-found";
import Expenses from "./components/pages/expenses";
import "./App.css";
interface IRoute {
  path: string;
  component: () => JSX.Element;
  label: string;
  icon: string;
  isVisible?: boolean;
}
const routes: Array<IRoute> = [
  {
    path: "/login",
    component: Login,
    label: "Login Now",
    icon: "pi pi-login",
    isVisible: true,
  },
  {
    path: "/register",
    component: Register,
    label: "Register here!",
    icon: "pi pi-sign-in",
    isVisible: true,
  },
  {
    path: "/",
    component: Users,
    label: "My Users!",
    icon: "pi pi-user",
    isVisible: true,
  },
  {
    path: "/expenses",
    component: Expenses,
    label: "My Expenses",
    icon: "pi pi-user",
    isVisible: true,
  },
  {
    path: "*",
    component: NotFound,
    label: "not found",
    icon: "pi pi-notfound",
  },
];

export default function App() {
  console.log("render all my application");
  return (
    <div>
      <BrowserRouter>
        <AppLinks routes={routes} />
        <Routes>
          <>
            {routes.map((route: IRoute) => {
              return <Route path={route.path} Component={route.component} />;
            })}
          </>
        </Routes>
      </BrowserRouter>
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
            <>
              <Link to={route.path}>
                <Button label={route.label} icon={route.icon} />
              </Link>
            </>
          );
        })}
    </div>
  );
}
