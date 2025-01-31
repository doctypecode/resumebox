import { IResumeData } from "@/const/IResume"

const NewResume: IResumeData = {
    id: '',
    resumeName: "Untitled",
    updatedAt: "",
    personal: {
        firstName: '',
        lastName: '',
        displayName: '',
        designation: '',
        summary: '',
        city: '',
        country: '',
        phoneNumber: '',
        email: '',
    },
    social: [],
    skills: [],
    education: [],
    experience: []
}
export default NewResume
