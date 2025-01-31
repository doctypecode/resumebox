import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AiFillDelete } from "react-icons/ai";
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { addSkill, editSkill, removeSkill } from '@/store/resume/resumeReducer';

const SkillEditForm: React.FC<any> = ({inputClasses}:any) => {
    const skills = useSelector((state: RootState) => state.resume.skills);
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const {key} = event;
        if(key == "Enter" && inputRef.current && inputRef.current?.value.trim() !== ''){
            // Add to Skill list
            dispatch(addSkill({name: inputRef.current.value, rating:"1"}));
            inputRef.current.value = "";
        }
    }

    return (
        <div className='col-span-2'>
            <div className='mb-2'>
                {
                    skills?.map((skill: any, index: number) => {
                        return <div className='grid grid-cols-[6fr_3fr_3fr] gap-6 mb-2' key={index}>
                            <div>
                                <Input className={inputClasses} value={skill.name} onChange={(event) => dispatch(editSkill({index, skill:{name:event.target.value}}))} />
                            </div>
                            <div className='m-auto'>
                                <select value={skill.rating} onChange={event => dispatch(editSkill({index, skill:{rating:event.target.value}}))}>Rate your skills
                                <option value={'1'}>Beginner</option>
                                <option value={'2'}>Intermediate</option>
                                <option value={'3'}>Expert</option>
                                </select>
                            </div>
                            <div className='m-auto'>
                                <Button className='text-gray-300 hover:text-destructive bg-gray-0 shadow-none m-auto' onClick={() => dispatch(removeSkill(index))}><AiFillDelete /></Button>
                            </div>
                        </div>
                    })
                }
            </div>

            <Input 
            ref={inputRef}
            placeholder='Add skills... '
            type="text" 
            onKeyDown={handleKeyDown} 
            className={inputClasses}></Input>
        </div>
    );
}

export default SkillEditForm