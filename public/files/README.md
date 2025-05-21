# Resume Files

This directory contains the resume file that is linked from the "Download Resume" button in the Journey section.

## How to Update Your Resume

1. Replace the `resume.pdf` file with your own PDF resume file
2. Make sure the file is named `resume.pdf` or update the link in `JourneySection.tsx`
3. You can also customize the downloaded filename in the `download` attribute in `JourneySection.tsx`

## Download Tracking

The website includes simple download tracking which logs downloads to the console. 
You can extend this functionality with your preferred analytics provider.

The tracking code is located in the `handleResumeDownload` function in `JourneySection.tsx`. 