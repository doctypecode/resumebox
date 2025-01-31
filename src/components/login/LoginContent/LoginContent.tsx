import LogoFull from "@/components/logo/LogoFull";
import { DocumentIcon } from '@heroicons/react/24/solid';

const LoginContent = () => {
    return (
        <div className="h-screen py-[5rem] relative bg-muted">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full pl-[2rem]">
                <LogoFull classes="pt-0"/>
                <h1 className="text-5xl font-medium font-robotoSlab leading-relaxed">
                    Better Resume Reach.
                </h1>
            </div>
        </div>
    );
}

export default LoginContent;