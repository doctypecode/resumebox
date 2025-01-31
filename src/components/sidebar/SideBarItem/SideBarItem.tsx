"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineWorkspaces, MdWorkspacesFilled } from 'react-icons/md';

const SideBarItem = ({item}: any) => {
    const pathName = usePathname();
    return (
        <div 
        className={`text-md px-[1rem] py-[0.35rem] rounded-lg flex items-center gap-4
        ${pathName == item.href ? 'text-primary bg-primary-light' : 'text-foreground border-none text-gray-500'}`}
        >
            {item.icon}
            <Link href={item.href}>{item.label}</Link>
        </div>
    );
}
export default SideBarItem