import { useEffect } from "react";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function Login() {
  useEffect(() => {
    console.log("Login mounted..");
  }, []);
  return <h1> Login</h1>;
}

function Register() {
  useEffect(() => {
    console.log("Register mounted..");

    return () => {
      console.log("Register Unmount - component destroyed");
    };
  }, []);

  return <h1> Register</h1>;
}

function Users() {
  useEffect(() => {
    console.log("Users mounted..");
  }, []);
  return <h1> Users</h1>;
}

interface IRoute {
  path: string;
  component: () => JSX.Element;
  label: string;
  icon: string;
}
const routes: Array<IRoute> = [
  {
    path: "/login",
    component: Login,
    label: "Login Now",
    icon: "pi pi-login",
  },
  {
    path: "/register",
    component: Register,
    label: "Register here!",
    icon: "pi pi-sign-in",
  },
];

export default function App() {
  console.log("render all my application");
  return (
    <div>
      <BrowserRouter>
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
          {/* <Link to="/login">
            <Button label="Login" icon="pi pi-user" />
          </Link>
          <Link to="/register">
            <Button label="Register" icon="pi pi-sign-in" />
          </Link>
          <Link to="/users">
            <Button label="Users" icon="pi pi-user" />
          </Link>
          <Link to="/users">
            <Button label="Logout" icon="pi pi-sign-out" />
          </Link> */}
          {/* IMPLEMENT HERE THE LINKS MAP */}
          {/* {routes.map((route: IRoute) => {
           WHAT SHOULD BE HERE????????????????
          })} */}
        </div>
        <Routes>
          <>
            {routes.map((route: IRoute) => {
              return <Route path={route.path} Component={route.component} />;
            })}
            {/* <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/users" Component={Users} /> */}
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
