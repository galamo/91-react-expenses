import { useEffect } from "react";

export default function Users() {
  useEffect(() => {
    console.log("Users mounted..");
    return () => {
      console.log("Users Unmount - component destroyed");
    };
  }, []);

  return <h1> Users</h1>;
}
