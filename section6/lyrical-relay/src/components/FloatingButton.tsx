import React from "react";
import { Icon, Button } from "react-materialize";

const FloatingButton = React.forwardRef((props, ref) => (
  <Button
    className="red"
    floating
    icon={<Icon>add</Icon>}
    large
    node="a"
    fab={{ direction: "right" }}
    waves="light"
    {...props}
  />
));

// ref={ref}
export default FloatingButton;
