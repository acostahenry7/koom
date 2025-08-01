"use client";
import { Button } from "@/components/ui/button";
import {
  DeviceSelectorAudioInput,
  DeviceSelectorVideo,
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (param: boolean) => void;
}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error("can't use a useCall hook outside StreamCall component");
  }

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white ">
      <h1 className="font-bold text-2xl">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label
          htmlFor="micAndCam"
          className="flex justify-center items-center font-medium gap-2"
        >
          <input
            id="micAndCam"
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Turn Mic and Camera {isMicCamToggledOn ? "on" : "off"}
        </label>

        <DeviceSettings />
      </div>
      <Button
        className="bg-blue-1 hover:bg-blue-600"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </section>
  );
};

export default MeetingSetup;
