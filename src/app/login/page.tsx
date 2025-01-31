import { PackageOpen } from "lucide-react"
import Link from 'next/link'

import { LoginForm } from "@/components/login/LoginForm"
import Navbar from "@/components/navbar"
import LoginContent from "@/components/login/LoginContent"

export default function LoginPage() {
  return (
    <div className="grid grid-cols-[7fr_5fr]">
      <div><LoginContent /></div>
      <div><LoginForm /></div>
    </div>
  )
}
