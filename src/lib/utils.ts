import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fullDateTimeFormat(dateString: string){
  // const date = new Date(new Date(dateString).toISOString());
  // return `${date.getDay()} ${date.getMonth()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  return `05 Dec 2024, 11:32`;
}