import { Box, BoxProps, Center, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Typed from "typed.js";
import "./index.css";

export const LiveTranscript = ({
  transcript,
  ...props
}: BoxProps & {
  transcript: string;
}) => {
  // Create reference to store the DOM element containing the animatio