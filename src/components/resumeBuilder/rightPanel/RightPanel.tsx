"use client"
import ClassicTemplate from "@/app/template/classic/ClassicTemplate";
import RenderAndDisplayPDF from "@/app/template/RenderAndDisplayPDF";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function RightPanel(){
    const resume = useSelector((state: RootState) => state.resume);
    if(!resume) return "Loading resume..."
    return <RenderAndDisplayPDF 
        Template={
            <ClassicTemplate resume={resume}/>
        }/>
}