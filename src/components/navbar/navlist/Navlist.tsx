"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const List = [
    {
        label: 'Workspace',
        link: '/workspace'
    },
]

const Navlist = () => {
    const pathName = usePathname();
    return (
        <div>
            {
                List.map(item => {
                    return (
                        <Link href={item.link}>
                            <div className={`inline-block py-[1rem] px-[0.5rem] font-zillaSlab border-b
                                ${pathName == item.link ? 'border-b border-primary text-primary font-medium' : 'text-foreground border-none'}`}>
                                {item.label}
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
}
export default Navlist;