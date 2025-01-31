import LogoFull from "../logo/LogoFull";
import Avatar from "../ui/avatar";
import Navlist from "./navlist/Navlist";


const Navbar = () => {
    return (
        <div className='flex justify-end dark:text-background dark:bg-background'>
            <div className="inline-flex items-center gap-x-4 cursor-pointer hover:bg-gray-100 p-[1rem]">
                <div>
                    <div>Kapil Kumar</div>
                    <div className="text-[0.6rem] text-gray-500">Project Engineer</div>
                </div>
                <div>
                    <Avatar displayName={'Kapil Kumar'}/>
                </div>
            </div>
        </div>
    );
}



export default Navbar;