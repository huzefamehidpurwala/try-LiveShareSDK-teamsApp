import React, { useContext, useEffect, useState } from "react";
import { TeamsFxContext } from "../Context";
import { app } from "@microsoft/teams-js";
import { getMeetingInfo } from "../lib/utils";
import { UserMeetingRole } from "@microsoft/live-share";
import Counter from "./Counter";
import { Spinner, Text } from "@fluentui/react-components";

const Tab = () => {
  const teamsUserCredential = useContext(TeamsFxContext).teamsUserCredential;
  // const [persnolTab, setPersnolTab] = useState(false);
  const [userRole, setUserRole] = useState("");

  const setCurrentUserRoleFunc = (currentUserId, participantsObj) => {
    if (participantsObj) {
      if (participantsObj.organizer?.identity?.user.id === currentUserId) {
        setUserRole(UserMeetingRole.organizer);
      } else {
        participantsObj?.attendees.forEach((people) => {
          if (people?.identity.user?.id === currentUserId) {
            Object.keys(UserMeetingRole).forEach((role) => {
              if (people.role === role) {
                setUserRole(UserMeetingRole[role]);
              }
            });
          }
        });
      }
    }
  };

  useEffect(() => {
    // Initialize teams app
    app.initialize().then(async () => {
      // Get our frameContext from context of our app in Teams
      app.getContext().then(async (context) => {
        if (context.chat?.id && context.meeting?.id) {
          // setPersnolTab(false);

          const currentUserId = context.user.id;
          const recieved = await getMeetingInfo(
            teamsUserCredential,
            context.chat?.id
          );

          const participantsObj =
            recieved?.graphClientMessage?.value[0]?.participants;

          setCurrentUserRoleFunc(currentUserId, participantsObj);
        } else {
          setUserRole("true");
        }
      });

      app.notifySuccess();
    }); // eslint-disable-next-line
  }, []);

  return (
    <>
      {!userRole && (
        <div className="absolute z-10 h-screen w-screen bg-teams-bg-3 opacity-90">
          <div className="relative grid-center-box h-full opacity-[100_!important]">
            <Spinner size="large" />
          </div>
        </div>
      )}

      <div className="grid-center-box gap-4 h-full">
        {!(userRole?.toLowerCase() in UserMeetingRole) ? (
          <Text size={900}>Persnol Tab Experience</Text>
        ) : (
          <Counter userRole={userRole} />
        )}
        {/* <Counter userRole={"userRole"} /> */}
      </div>
    </>
  );
};

export default Tab;
