import { getResume } from "@/app/api/resume";
import ResumeBuilder from "@/components/resumeBuilder/ResumeBuilder";
import { IResumeData } from "@/const/IResume";


export default async function ResumeEdit({params}: any){
    const {resumeId} = await params;
    const resume: IResumeData = await getResume(resumeId);

    return <ResumeBuilder resume={resume}/>
}