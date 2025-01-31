"use client"
import ResumeEditForm from "./ResumeEditForm/ResumeEditForm";
import { EducationDetailsForm, PersonalDetailsForm, SkillDetailsForm } from "./resumeFormObject";
import { Button } from "@/components/ui/button";
import { TbArrowBackUp } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { IoCloudUploadSharp } from "react-icons/io5";
import { IResumeData } from "@/const/IResume";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { editPersonalFields, editResumeName } from "@/store/resume/resumeReducer";

type LeftPanelProps = {
    resume: IResumeData
    setResume: any
}

export default function LeftPanel() {
    const router = useRouter();
    const resume = useSelector((state: RootState) => state.resume)
    const dispatch = useDispatch();

    const handleNameChange = (event: any) => {
        dispatch(editResumeName(event.target.value));
    }

    const handleFormChange = (event: any) => {
        const {name, value} = event.target;
        dispatch(editPersonalFields({name, value}));
    }

    const handleBack = () => {
        router.push("/resumes")
    }

    // if(!resume) return "Loading Resume..."

    return <div className="border-r">
        <div className="mb-2 border-b flex items-center justify-between sticky top-0 bg-white shadow-none transition-shadow group group-[&.scrolled]:shadow-md">
            <div>
                <Button className="rounded-none flex items-center py-[1.5rem] text-md hover:text-primary " onClick={handleBack} variant={'secondary'}>
                    <TbArrowBackUp fontSize={'2rem'}/>
                    back
                </Button>
            </div>
            <div className="text-sm flex items-center gap-2 text-primary px-[0.75rem] py-[0.5rem] bg-primary-light rounded-lg mr-2">
            <IoCloudUploadSharp />
                Saved / Saving...
            </div>
        </div>
        <div className="m-auto flex gap-1 max-w-max items-center mb-[1.5rem]">
            <input 
                title="Edit"
                onChange={handleNameChange}
                className="p-0 py-[0.5rem] text-center border-b-2 border-transparent outline-none focus:outline-none focus:border-primary focus:bg-primary-light focus:border-b-2 hover:border-b-2-primary hover:border-primary"
                value={resume.resumeName} />
        </div>
        <ResumeEditForm formStructure={PersonalDetailsForm(resume.personal, handleFormChange)} heading={"Personal Details"} />
        <ResumeEditForm formStructure={SkillDetailsForm()} heading={"Skills"} />
        <ResumeEditForm formStructure={EducationDetailsForm()} heading={"Education"} />
        <div className="pb-[10rem]"></div>
    </div>
}