import useMediaRecorder from "@/utilities/hooks/useMediaRecorder";
import { useEffect } from "react";

export default function useAudioRecorder() {
  const {
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    askForPermission,
  } = useMediaRecorder("audio");

  useEffect(() => {
    askForPermission();
    return () => {};
  }, []);

  
}
