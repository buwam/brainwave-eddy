import { Flex } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { THEME_COLORS } from "../util";
import "./Node.css";

export interface CustomNodeData {
  sentences: string[];
}

export const CustomNode = ({
  data,
  id,
}: {
  data: CustomNodeData;
 