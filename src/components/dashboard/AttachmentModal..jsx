import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { X, Pause, UploadCloud } from "lucide-react";

export default function AttachmentModal({ open, onClose }) {
  const [uploadProgress, setUploadProgress] = useState(65);
  const [timeRemaining, setTimeRemaining] = useState("30 seconds remaining");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Add your documents here, and you can upload up to 5 files max
          </DialogTitle>
        </DialogHeader>

        {/* Drag & Drop Area */}
        <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center bg-gray-100 hover:bg-gray-200 transition">
          <UploadCloud className="mx-auto text-gray-500 w-12 h-12 mb-3" />
          <p className="text-gray-700 font-medium">
            Drag your file(s) to start uploading
          </p>
          <p className="text-sm text-gray-500">or</p>
          <label className="cursor-pointer text-blue-600 font-semibold underline">
            Browse files
            <input
              type="file"
              multiple
              accept=".jpg,.png,.svg,.zip"
              className="hidden"
            />
          </label>
        </div>

        {/* File Type Restrictions */}
        <p className="text-sm text-gray-500 mt-2">
          Only supports <b>.jpg, .png, .svg</b> and <b>.zip</b> files
        </p>

        {/* Upload Progress */}
        <div className="mt-4">
          <Progress value={uploadProgress} className="h-2 rounded-full" />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>{uploadProgress}%</span>
            <span>{timeRemaining}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button className="bg-gray-300 px-4 py-2 rounded flex items-center gap-2 text-gray-700 hover:bg-gray-400 transition">
            <Pause size={16} /> Pause
          </button>
          <button
            className="bg-red-500 px-4 py-2 rounded flex items-center gap-2 text-white hover:bg-red-600 transition"
            onClick={onClose}
          >
            <X size={16} /> Cancel
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
