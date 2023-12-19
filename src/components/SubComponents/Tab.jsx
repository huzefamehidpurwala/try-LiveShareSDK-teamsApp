import { Button, Text, mergeClasses } from "@fluentui/react-components";
import React, { useState } from "react";
import { useStyles } from "../../styles";
import { Add48Regular } from "@fluentui/react-icons";

const Tab = () => {
  const styles = useStyles();
  const [counter, setCounter] = useState(0);

  return (
    <div
      className={mergeClasses("h-screen", styles.gridCenterBox)}
      // className={
      //   styles.gridCenterBox /* "h-screen grid place-content-center" */
      // }
    >
      <div className={styles.flexCenterBox}>
        <Text size={900}>Value: {counter}</Text>
        <Button
          shape="circular"
          size="large"
          icon={<Add48Regular />}
          onClick={(e) => setCounter((t) => ++t)}
        />
      </div>
    </div>
  );
};

export default Tab;
