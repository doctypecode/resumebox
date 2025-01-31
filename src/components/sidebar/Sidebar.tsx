import { IoSettingsSharp } from "react-icons/io5";
import SideBarItem from "./SideBarItem/SideBarItem";
import { FaPencil } from "react-icons/fa6";
const SideBarList = [
    {
        label: 'resumes',
        href: '/resumes',
        icon: <FaPencil fontSize={18} className="mt-[0.2rem]"/> 
    },
    {
        label: 'settings',
        href: '/settings',
        icon: <IoSettingsSharp fontSize={18} className="mt-[0.2rem]"/>
    }
]

const Sidebar = () => {
    return (
        <div className="py-[2rem] text-gray-700 flex flex-col gap-y-2">
            {
                SideBarList.map(item => {
                    return <SideBarItem item={item}/>
                })
            }
        </div>
    );
}

export default Sidebar;