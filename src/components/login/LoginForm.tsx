"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Linkedin } from "lucide-react"
import Link from "next/link"
import { SyntheticEvent, useState } from "react"
import { useRouter } from "next/navigation"
import axiosInstance from "@/lib/axios"
import { MdOutlineLogin, MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Cookies from "js-cookie"
import axios from "axios"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(email != '' && password != ''){
            const response = await axios.post("http://localhost:8080/api/auth/login", {email, password});
            const {token} = response.data.data;
            if(token){
                Cookies.set('authToken', token, { expires: 7 }); // Set cookie to expire in 7 days
                router.push("/resumes");
                return;
            }

            setError(response.data.message);
            router.push("/login");
        }
    }

  return (
    <div className="p-[2rem] font-robotoSlab relative h-full">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-[5rem]">
            <h6 className="text-2xl font-semibold mb-[3rem]">Let's Login</h6>
            {/* <p className="text-gray-400 mb-[3rem] font-roboto">Login to your account.</p> */}
            <div >
                <div className="mb-[1.5rem]">
                    <label className="flex gap-2 mb-[0.5rem]">
                        <MdOutlineMailOutline fontSize={'1.5rem'}/>
                        Email
                    </label>
                    <Input type="text" placeholder="feedback@resumebox.pro" onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="mb-[2rem]">
                    <label className="flex gap-2 mb-[0.5rem]">
                        <RiLockPasswordLine fontSize={'1.5rem'}/>
                        Password
                    </label>
                    <Input type="password" placeholder="*******" onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <Button className="ml-auto block cursor-pointer" onClick={handleSubmit}>
                    <label className="flex gap-2 items-center cursor-pointer">
                        <MdOutlineLogin fontSize={'1.5rem'}/>
                        Login
                    </label>
                </Button>
            </div>
        </div>
    </div>
  )
}
