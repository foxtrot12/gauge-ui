import { useEffect, useRef } from "react";

type RecordingMode = "audio" | "video" | "both";

interface UseMediaRecorderReturn {
  /** Starts recording.
   *  - Checks if permission is already granted; otherwise, asks for it.
   *  - Returns a promise that resolves with a MediaStream once recording starts.
   */
  startRecording: () => Promise<MediaStream>;
  /**
   * Stops recording.
   * - Returns a promise that resolves with a URL created from the recorded media Blob.
   */
  stopRecording: () => Promise<string>;
  /**
   * Requests user permission for using media devices.
   * - Returns a promise that resolves with a MediaStream upon success.
   */
  askForPermission: () => Promise<MediaStream>;
  /**
   * Pauses the current recording.
   */
  pauseRecording: () => void;
  /**
   * Resumes the paused recording.
   */
  resumeRecording: () => void;
}

/**
 * A generic hook to record media (audio, video, or both).
 *
 * @param mode - Determines the recording type:
 *               'audio' records only audio,
 *               'video' records only video,
 *               'both' records both audio and video.
 * @returns An object containing functions to control recording.
 */
function useMediaRecorder(mode: RecordingMode): UseMediaRecorderReturn {
  // Refs for storing the MediaStream, MediaRecorder, and recorded data.
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunks = useRef<Blob[]>([]);

  // Build media constraints based on the recording mode.
  const constraints: MediaStreamConstraints =
    mode === "audio"
      ? { audio: true }
      : mode === "video"
      ? { video: true }
      : { audio: true, video: true };

  /**
   * Requests user permission and obtains the media stream.
   */
  const askForPermission = async (): Promise<MediaStream> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      mediaStreamRef.current = stream;
      return stream;
    } catch (error) {
      throw new Error(`Permission denied or error occurred: ${error}`);
    }
  };

  /**
   * Starts the recording.
   *
   * If no media stream exists, it first requests permission.
   * It clears previous recorded data and creates a new MediaRecorder.
   * Event listeners (data available, stop) are attached to capture recorded data.
   */
  const startRecording = async (): Promise<MediaStream> => {
    // If no stream exists, request it.
    if (!mediaStreamRef.current) {
      await askForPermission();
    }
    if (!mediaStreamRef.current) {
      throw new Error("No media stream available for recording.");
    }

    // Reset recorded data.
    recordedChunks.current = [];

    // Use a MIME type based on the mode.
    const mimeType = mode === "audio" ? "audio/webm" : "video/webm";

    try {
      mediaRecorderRef.current = new MediaRecorder(mediaStreamRef.current, {
        mimeType,
      });
    } catch (err) {
      console.error("MediaRecorder creation failed:", err);
      throw err;
    }

    // When data is available, collect the blob.
    mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
      if (event.data && event.data.size > 0) {
        recordedChunks.current.push(event.data);
      }
    };

    // Start recording.
    mediaRecorderRef.current.start();

    return mediaStreamRef.current;
  };

  /**
   * Pauses the ongoing recording if it is currently recording.
   */
  const pauseRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.pause();
    }
  };

  /**
   * Resumes the recording if it is paused.
   */
  const resumeRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "paused"
    ) {
      mediaRecorderRef.current.resume();
    }
  };

  /**
   * Stops the recording.
   *
   * Waits for the MediaRecorder to finish stopping and then creates a URL from the Blob.
   */
  const stopRecording = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!mediaRecorderRef.current) {
        return reject("No recording in progress");
      }
      // Attach a one-time stop event listener.
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunks.current, {
          type: mediaRecorderRef.current?.mimeType,
        });
        const url = URL.createObjectURL(blob);
        resolve(url);
      };
      mediaRecorderRef.current.stop();
    });
  };

  /**
   * Clean up: remove event listeners and stop all media tracks when the component unmounts.
   */
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.ondataavailable = null;
        mediaRecorderRef.current.onstop = null;
        // Stop recording if not already inactive.
        if (mediaRecorderRef.current.state !== "inactive") {
          mediaRecorderRef.current.stop();
        }
      }
      // Stop all media tracks from the stream.
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return {
    startRecording,
    stopRecording,
    askForPermission,
    pauseRecording,
    resumeRecording,
  };
}

export default useMediaRecorder;
