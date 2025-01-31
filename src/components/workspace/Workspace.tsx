"use client"
import NewResume from "@/data/ResumeData";
import { Button } from "../ui/button";
import WorkspaceItem from "./WorkspaceItem";
import { createResume } from "@/app/api/resume";
import { useRouter } from "next/navigation";

const Workspace = ({data}: any) => {
    const router = useRouter();
    const handleCreateResume = async () => {
        const newResume = {...NewResume};
        // Create Resume and Navigate
        const createdResume = await createResume(newResume);
        if(createdResume.success) router.push(`/resume/edit/${createdResume.data?.id}`);
    }

    return (
        <div>
            <div className="border-b pb-[1rem] font-bold text-2xl flex justify-between">
                <span>Resumes</span>
            </div>
            <span className="flex justify-end mt-[1rem]"><Button variant={'text'} onClick={handleCreateResume}>+ Create Resume</Button></span>
            {
                data.map((resume: any) => <WorkspaceItem resume={resume}/>)
            }
        </div>
    );
}


export default Workspace