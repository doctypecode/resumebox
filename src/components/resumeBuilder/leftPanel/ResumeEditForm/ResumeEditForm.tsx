"use client"
type ResumeEditFormProps = {
    heading: string,
    formStructure: any[]
}

export default function ResumeEditForm({heading, formStructure}: ResumeEditFormProps){
    return <div className="px-[2rem] mb-[2rem]">
        <h5 className="mb-[1.5rem] text-lg font-semibold">{heading}</h5>
        <div className="grid grid-cols-2 gap-4 p-0">
            {
                formStructure.map(field => {
                    return <div className={field.parentClass || ''} key={field.label}>
                       {field.label && <label className="font-light text-sm text-gray-500 mb-[0.45rem] inline-block">{field.label}</label>}
                        <div>{field.render()}</div>
                        {field.helpText && <div className="font-light text-xs text-gray-400 mb-[0.45rem] inline-block">{field.helpText}</div>}
                    </div>
                })
            }
        </div>
    </div>
}