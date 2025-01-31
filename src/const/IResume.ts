export interface IResumeData {
  id: string;
  resumeName: string;
  updatedAt: string;
  personal: {
    firstName: string;
    lastName: string;
    displayName: string;
    designation: string;
    summary: string;
    city: string;
    country: string;
    phoneNumber: string;
    email: string;
  }
  social: {
    name: string;
    url: string;
  }[];
  skills: {
    name: string;
    rating: string; // If `level` is a numeric value, use `number` instead of `string`
  }[];
  education: {
    institute: string;
    degree: string;
    location: string;
    startDate: string;
    endDate: string;
  }[];
  experience: {
    company: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
  }[]
}
