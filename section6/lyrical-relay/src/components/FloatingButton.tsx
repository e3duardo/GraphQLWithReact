import React from "react";
import { Button, Icon } from "react-materialize";
import { useHistory } from "react-router-dom";

function FloatingButton({ to }: { to: any }) {
  const history = useHistory();

  return (
    <Button
      className="red"
      floating
      icon={<Icon>add</Icon>}
      large
      node="a"
      fab={{ direction: "right" }}
      waves="light"
      onClick={() => history.push(to)}
    />
  );
}

export default FloatingButton;
