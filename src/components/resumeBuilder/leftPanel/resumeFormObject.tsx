"use client"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Multiselect from 'multiselect-react-dropdown';
import SkillEditForm from "./ResumeEditForm/SkillEditForm";
import EducationEditForm from "./ResumeEditForm/EducationEditForm";

const inputClasses = "shadow-none border-0 border-b border-transparent bg-gray-100 px-[0.8rem] py-[1.5rem] focus-visible:ring-0 focus:border-primary focus:rounded-b-none"

export const PersonalDetailsForm = (data: any, handleChange: Function) => [
    {
        label: 'First Name',
        render: () => <Input className={inputClasses} type="text" name="firstName" placeholder="Kapil" value={data.firstName} onChange={(event) => handleChange(event, 'personal')}/>
    },
    {
        label: 'Last Name',
        render: () => <Input className={inputClasses} type="text" name="lastName" placeholder="Kumar" value={data.lastName} onChange={(event) => handleChange(event, 'personal')}/>
    },
    {
        label: 'Phone Number',
        render: () => <Input className={inputClasses} type="text" name="phoneNumber" placeholder="+91 790XXXXX10" value={data.phoneNumber} onChange={(event) => handleChange(event, 'personal')}/>
    },
    {
        label: 'Email',
        render: () => <Input className={inputClasses} type="text" name="email" placeholder="kapil.kumar@resumebox.com" value={data.email} onChange={(event) => handleChange(event, 'personal')}/>
    },
    {
        label: 'Designation / Job Role',
        render: () => <Input className={inputClasses} type="text" name="designation" placeholder="Senior Full Stack Developer" value={data.designation} onChange={(event) => handleChange(event, 'personal')}/>
    },
    {
        label: 'Experience',
        render: () => <Input className={inputClasses} type="text" name="experience" placeholder="Exp in years" value={data.experience} onChange={(event) => handleChange(event, 'personal')}/>
    },
    {
        label: 'Professional Summary',
        parentClass: 'col-span-2',
        render: () => <Textarea className={`${inputClasses}`} rows={7} name="summary" placeholder="Please provide summary" value={data.summary} onChange={(event) => handleChange(event, 'personal')}/>
    },
]

export const SkillDetailsForm = () => [
    {
        render: () => <SkillEditForm inputClasses={inputClasses} />,
        parentClass: 'col-span-2',
        helpText:'Press enter to add skill'
    }
]

export const EducationDetailsForm = () => [
    {
        render: () => <EducationEditForm inputClasses={inputClasses}/>,
        parentClass: 'col-span-2',
    }
]