"use client";
import { JSX, useRef } from "react";

const RenderTemplateImage = ({ Template }: { Template: JSX.Element }) => {
    const templateRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative bg-muted h-full">
            {/* Invisible container for rendering the template */}
            <div className="scale-100" ref={templateRef}>
                {Template}
            </div>
        </div>
    );
};

export default RenderTemplateImage;
