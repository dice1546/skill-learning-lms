"use client";

import toast from "react-hot-toast";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";

interface FileUploadProps {
  onChange: (url?: string, fileName?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({
  onChange,
  endpoint,
}: FileUploadProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        if (res && res.length > 0) {
          const fileUrl = res[0].url;
          const fileName = res[0].fileName; // Extract the file name
          onChange(fileUrl, fileName); // Pass both URL and file name
        } else {
          onChange();
        }
      }}
      onUploadError={(error: Error) => {
        toast.error(`${error?.message}`);
      }}
    />
  );
};
