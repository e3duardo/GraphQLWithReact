import React from "react";
import { Container } from "react-materialize";

type TemplateProps = {
  children?: React.ReactNode;
};

function Template({ children }: TemplateProps) {
  return <Container>{children}</Container>;
}

export default Template;
