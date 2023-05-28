import { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    console.log("Register mounted..");
    return () => {
      console.log("Register Unmount - component destroyed");
    };
  }, []);

  return <h1> Register</h1>;
}
