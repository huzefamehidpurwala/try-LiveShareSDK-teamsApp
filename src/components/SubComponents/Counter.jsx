import { Button, Text } from "@fluentui/react-components";
import React, { useState, useEffect } from "react";
import { Add48Regular } from "@fluentui/react-icons";
import { LiveShareClient, UserMeetingRole } from "@microsoft/live-share";
import { LiveShareHost, app } from "@microsoft/teams-js";

const Counter = ({ userRole }) => {
  // const styles = useStyles();
  const [counter, setCounter] = useState(0);

  /* useEffect(() => {
    app.initialize().then(async () => {
      try {
        const liveShareHost = LiveShareHost.create();
        const liveShareClient = new LiveShareClient(liveShareHost)
      } catch (error) {}

      app.notifySuccess();
    });
  }, []); */

  return (
    <>
      <Text size={900}>Value: {counter}</Text>

      {userRole === UserMeetingRole.organizer && (
        <Button
          shape="circular"
          size="large"
          icon={<Add48Regular />}
          onClick={(e) => setCounter((t) => ++t % 10)}
        />
      )}
    </>
  );
};

export default Counter;
