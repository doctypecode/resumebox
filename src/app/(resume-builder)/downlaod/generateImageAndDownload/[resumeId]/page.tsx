import { getResume } from "@/app/api/resume";
import ClassicTemplate from "@/app/template/classic/ClassicTemplate";


export default async function ResumeEdit({params}: any){
    const {id} = params;
    const resume = await getResume(id);

    return resume ? 
   <ClassicTemplate resume={resume}/> : 'Loading...'
}