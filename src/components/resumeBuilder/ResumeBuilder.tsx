"use client";

import LeftPanel from "./leftPanel/LeftPanel";
import RightPanel from "./rightPanel/RightPanel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setResume } from "@/store/resume/resumeReducer";
import { IResumeData } from "@/const/IResume";
import { RootState } from "@/store";

type ResumeBuilderProps = {
    resume: IResumeData | null;
};

export default function ResumeBuilder({ resume }: ResumeBuilderProps) {
    const dispatch = useDispatch();
    const [isHydrated, setIsHydrated] = useState(false);
    const storedResume = useSelector((state: RootState) => state.resume);
    console.log(storedResume)

    useEffect(() => {
        if (resume) {
            // Dispatch the action to set the resume
            dispatch(setResume({ resume }));
        }

        // Ensure hydration flag is set after dispatch
        setIsHydrated(true);
    }, []);

    // Avoid rendering during the hydration phase
    if (!storedResume) {
        return null
    }

    return (
        <div className="grid grid-cols-[5fr_7fr] font-poppins">
            <div>
                <LeftPanel />
            </div>
            <div>
                <RightPanel />
            </div>
        </div>
    );
}
