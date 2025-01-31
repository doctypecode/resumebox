import { getAllResume } from "@/app/api/resume";
import Workspace from "@/components/workspace";

export default async function Page(){
    const data = await getAllResume();
    return data ? <Workspace data={data} /> : 'Fetching Resumes...'
}
