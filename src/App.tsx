import { useEffect } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function App() {
  console.log("render all my application");
  return (
    <div>
      <BrowserRouter>
        <Link to="/login"> Login </Link>
        <Link to="/register"> Need to register? </Link>
        <Link to="/users"> My Users </Link>

        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/users" Component={Users} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
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
