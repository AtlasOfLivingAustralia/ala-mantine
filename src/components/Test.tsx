import React from "react";
import { Title } from "@mantine/core";

interface TestProps {
  message: string;
}

export function Test({ message }: TestProps): React.ReactElement {
  return <Title>This is a testing header {message}</Title>;
}
