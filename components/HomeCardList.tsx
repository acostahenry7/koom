"use client";
import HomeCard from "@/components/HomeCard";
import MeetingModal from "@/components/MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const HomeCardList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isInstantMeeting" | "isScheduleMeeting" | "isJoinMeeting" | undefined
  >(undefined);

  const { user } = useUser();
  const client = useStreamVideoClient();
  const [meetingProps, setMeetingProps] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });

  const [callDetails, setCallDetails] = useState<Call>();

  const createMeeting = async () => {
    if (!user || !client) return;

    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create call");

      const startsAt =
        meetingProps.dateTime.toISOString() ||
        new Date(Date.now()).toISOString();

      const description = meetingProps.description || "Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);
      if (!meetingProps.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast.success("Meeting Created", {
        description: "Meeting was successfully creaed",
      });
    } catch (error) {
      console.log(error);
      toast.error("Error", {
        //@ts-ignore
        description: error?.message || "",
      });
    }
  };

  return (
    <section className="py-8 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 ">
      <HomeCard
        className="bg-orange"
        icon="GoPlus"
        title="New Meeting"
        desc="Setup a new meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        className="bg-blue-1"
        icon="GoTab"
        iconSize={30}
        title="Join Meeting"
        desc="Via invitation link"
        handleClick={() => setMeetingState("isJoinMeeting")}
      />
      <HomeCard
        className="bg-purple"
        icon="GoCalendar"
        title="Schedule Meeting"
        desc="Plan your meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        className="bg-yellow"
        icon="GoDeviceCameraVideo"
        title="View Recordings"
        desc="Meetin recordings"
      />

      <MeetingModal
        open={meetingState == "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start a Meeting now"
        buttonText="Start Meeting"
        handleClick={() => createMeeting()}
      />
      <MeetingModal
        open={meetingState == "isJoinMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Join Meeting"
        buttonText="Join Meeting"
        handleClick={() => {}}
      />
      <MeetingModal
        open={meetingState == "isScheduleMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start a Meeting now"
        buttonText="Crear reunión"
        handleClick={() => {}}
      />
    </section>
  );
};

export default HomeCardList;
