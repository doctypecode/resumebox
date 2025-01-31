import { IResumeData } from "@/const/IResume";
import axiosInstance from "@/lib/axios";

export async function getAllResume(){
    try {
        const response = await axiosInstance.get("/resume/all");
        const {data} = response.data;
        if(response.data.success){
            return data;
        }
        return null;
      } catch (error) {
        console.error("Error fetching data:", error);  // Log any errors that occur during fetch
        return {
          props: { data: null },  // If an error occurs, pass null data
        };
      }
}


export async function getResume(resumeId: string){
    try {
        const response = await axiosInstance.get(`/resume/${resumeId}/`);
        const {data} = response.data;
        if(response.data.success){
            return data;
        }
        return null;
      } catch (error) {
        console.error("Error fetching data:", error);  // Log any errors that occur during fetch
        return {
          props: { data: null },  // If an error occurs, pass null data
        };
      }
}


export async function createResume(resume: IResumeData){
  try {
      const response = await axiosInstance.post(`/resume/create`, {resume});
      const {data} = response.data;
      if(response.data.success){
          return {
            success: true,
            data:data as IResumeData
          }
      }
      return {success: false};
    } catch (error) {
      console.error("Error fetching data:", error);  // Log any errors that occur during fetch
      return {
        success: false,
        error
      }
    }
}

export async function updateResume(payload: any){
  try {
    const response = await axiosInstance.post(`/resume/update`, payload);
    const {data} = response.data;
    return {success: data.success};
  } catch (error) {
    console.error("Error fetching data:", error);  // Log any errors that occur during fetch
    return {
      success: false,
      error
    }
  }
}