
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import  {useState , useRef } from "react"

export default function Register() {

  const userNameRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmedRef = useRef<HTMLInputElement>(null);

  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [isPasswordConfirmedTouched,setIsPasswordConfirmedTouched] = useState(false)

  function passwordConfirmValidation(p1:string, p2:string){
    p1 !== p2 ? setPasswordError(true) : setPasswordError(false)
  }

  return <div>
    <div className="flex flex-column md:flex-row">
    <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5">
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label htmlFor="username" className="w-6rem">
                User Name
            </label>
            <InputText id="userNameRef" type="text" ref={userNameRef} />
        </div>
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label htmlFor="username" className="w-6rem">
                First Name
            </label>
            <InputText id="firstNameRef" type="text"   ref={firstNameRef} />
        </div>
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label htmlFor="lastNameRef" className="w-6rem"  >
               Last Name
            </label>
            <InputText id="lastNameRef" type="text"   ref={lastNameRef}/>
        </div>
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label htmlFor="username" className="w-6rem">
                password
            </label>
            <InputText id="passwordRef" type="text"  ref={passwordRef}  onChange={({target})=>{
                const { value } = target;
                // if(!passwordConfirmedRef.current?.value) return;
               if(!isPasswordConfirmedTouched) return;
               passwordConfirmValidation(value , passwordConfirmedRef?.current?.value as string)
            }}/>
        </div>
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label htmlFor="username" className="w-6rem">
            password confirm
            </label>
            <InputText onFocus={()=>{
              setIsPasswordConfirmedTouched(true)
            }} id="passwordConfirmedRef" type="text"  ref={passwordConfirmedRef} onChange={({target})=>{
                const { value } = target;
                passwordConfirmValidation(value , passwordRef.current?.value as string)
            }} />
            {passwordError ? <span style={{color:"red"}}> Password is not match  </span> : null}
        </div>
       
        <Button label="Register" icon="pi pi-user" className="w-10rem mx-auto" onClick={()=>{
          // sendToserver
            const user = {
                userName:userNameRef.current?.value,
                firstName:firstNameRef.current?.value,
                lastName:lastNameRef.current?.value,
                password:passwordRef.current?.value,
            }
            console.log(user)
            // userNameRef.current?.value = ""
            // check how to reset the useRef element ?
            // counter.current.value =  counter.current.value + 1
        }}>  </Button>
    </div>
   
   
</div>

  </div>




}


