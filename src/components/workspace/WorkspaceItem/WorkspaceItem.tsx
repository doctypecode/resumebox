"use client"

import { Button } from '@/components/ui/button';
import ResumeDummyData from '@/data/ResumeData';
import { fullDateTimeFormat } from '@/lib/utils';
import { GrContactInfo } from "react-icons/gr";
import Image from 'next/image';
import { TbPassword } from "react-icons/tb";
import { useRouter } from 'next/navigation';

const WorkspaceItem = ({ resume }: any) => {
    // resume = ResumeDummyData;
    const router = useRouter();

    const onResumeClick = () => {
        router.push(`/resume/edit/${resume.id}`);
    }

    return (
        <div className='inline-flex gap-5 cursor-pointer p-[1rem] hover:border-b hover:border-b-2 hover:shadow-md hover:bg-gray-100 hover:border-primary' onClick={onResumeClick}>
            <div className='relative'>
                <Image src={"/resumeImage.webp"} alt='Resume Image' width={150} height={150} className='shadow-md' />
            </div>
            <div className='flex flex-col pl-5 justify-between border-gray-100'>
                <div>
                    <div>{resume.name}</div>
                    <div className='text-xs text-gray-500'>Updated {fullDateTimeFormat(resume.updatedAt)}</div>
                </div>
                <div className='flex gap-1 flex-col'>
                    {/* <div className='text-sm mb-2'>Download</div> */}
                    <div>
                        <Button className='flex justify-start link hover:primary text-sm px-0 text-gray-400 hover:text-primary' variant={'link'}>
                        <TbPassword />
                            Download Masked
                        </Button>
                    </div>
                    <div>
                        <Button className='flex justify-start link hover:primary text-sm px-0 text-gray-400 hover:text-primary' variant={'link'}>
                        <GrContactInfo />
                            Download Unmasked
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkspaceItem
