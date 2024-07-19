import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseEventCode = (eventCode: string): string => {
  //parse 2024-07-19_B into human readable format where B is Business, E is Engineering, O is Other
  const [date, type] = eventCode.split("_");
  return `${date} ${
    type === "B" ? "Business" : type === "E" ? "Engineering" : "Other"
  }`;
};

export const checkPennEmail = (email: string): boolean => {
  return email.endsWith("upenn.edu");
};
