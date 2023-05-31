import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Divider } from 'primereact/divider';

import {useState } from "react"

export default function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("")
  
  console.log("Hi the login component is render!!!")
  return <div>
    <div className="flex flex-column md:flex-row">
    <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5">
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label htmlFor="username" className="w-6rem">
                Username
            </label>
            <InputText id="username" type="text" value={userName} onChange={(event)=>{ setUserName(event.target.value) }} />
        </div>
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label htmlFor="password" className="w-6rem">
                Password
            </label>
            <InputText id="password" type="password" value={password}  onChange={({target})=>{ 
              const {value} = target
              if(value.length >= 16){
                alert("Password must contain max 16 characters")
                return;
              }else{
                setPassword(value)
              }

             }} />
             <span> number of characters {password.length}</span>
        </div>
        <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto" onClick={()=>{
          // send user to server
          // sendToServeR(({userName, password}))
          console.log({userName, password})
          setUserName("")
          setPassword("")
        }}></Button>
    </div>
    <div className="w-full md:w-2">
        <Divider layout="vertical" className="hidden md:flex">
            <b>OR</b>
        </Divider>
        <Divider layout="horizontal" className="flex md:hidden" align="center">
            <b>OR</b>
        </Divider>
    </div>
    <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
        <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success" ></Button>
    </div>
</div>

  </div>
}
