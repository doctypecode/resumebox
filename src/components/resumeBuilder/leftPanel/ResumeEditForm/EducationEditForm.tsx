import RadixAccordion from "@/components/ui/accordian";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RootState } from "@/store";
import { addEducation, editEducation, removeEducation } from "@/store/resume/resumeReducer";
import { AiFillDelete } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const EducationEditForm = ({inputClasses}: any) => {
    const education = useSelector((state: RootState) => state.resume.education);
    const dispatch = useDispatch();

    const handleChange = (education:any, index: number) => {
        dispatch(editEducation({education, index}))
    }

    return (
        <div>
            {
                education?.map((item: any, index: number) => {
                    return <div className="flex items-start mb-3">
                        <RadixAccordion 
                        title={<span>{item.institute}</span>}
                        content={
                            <div className="grid grid-cols-[6fr_6fr] gap-2 gap-y-4">
                                <div>
                                    <label htmlFor="institute"  className="font-light text-sm text-gray-500 mb-[0.45rem] inline-block">Institute</label>
                                    <Input value={item.institute} onChange={event => handleChange({[event.target.name]: event.target.value}, index)} name="institute" className={inputClasses}/>
                                </div>
                                <div>
                                    <label htmlFor="degree"  className="font-light text-sm text-gray-500 mb-[0.45rem] inline-block">Degree</label>
                                    <Input value={item.degree} onChange={event => handleChange({[event.target.name]: event.target.value}, index)} name="degree" className={inputClasses}/>
                                </div>
                                <div>
                                    <label htmlFor="duration"  className="font-light text-sm text-gray-500 mb-[0.45rem] inline-block">Duration</label>
                                    <div className="flex gap-2">
                                        <Input type="date" value={item.startDate} onChange={event => handleChange({[event.target.name]: event.target.value}, index)} name="startDate" className={inputClasses}/>
                                        <Input type="date" value={item.endDate} onChange={event => handleChange({[event.target.name]: event.target.value}, index)} name="endDate" className={inputClasses}/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="degree"  className="font-light text-sm text-gray-500 mb-[0.45rem] inline-block">Location</label>
                                    <Input value={item.location} onChange={event => handleChange({[event.target.name]: event.target.value}, index)} name="location" className={inputClasses}/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="jobDescription"  className="font-light text-sm text-gray-500 mb-[0.45rem] block">Job Description</label>
                                    <textarea  onChange={event => handleChange({[event.target.name]: event.target.value}, index)} name="description" className={`${inputClasses} w-full`}>{item.description}</textarea>
                                </div>
                            </div>
                        }/>
                        <div>
                            <Button className='text-gray-300 hover:text-destructive bg-gray-0 shadow-none m-auto inline-block' onClick={() => dispatch(removeEducation(index))}><AiFillDelete /></Button>
                        </div>
                    </div>
                })
            }

            <Button variant={"link"} className="border-b border-transparent rounded-none p-1 mt-2 hover:no-underline hover:bg-primary-light flex items-center" 
            onClick={() => dispatch(addEducation({education: {institute:'Untitled', degree:'', startDate:'', endDate:'', location:'', description:''}}))}><span className="mb-0.5"><IoMdAdd/></span> <span>Add Education</span></Button>
        </div>
    );
}

export default EducationEditForm;