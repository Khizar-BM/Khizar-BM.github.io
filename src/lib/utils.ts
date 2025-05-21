import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Initiates a file download for the specified URL
 */
export function downloadFile(url: string, filename: string) {
  // Create a link element
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.target = "_blank";
  
  // Append to the document temporarily
  document.body.appendChild(link);
  
  // Trigger the download
  link.click();
  
  // Clean up
  document.body.removeChild(link);
}
