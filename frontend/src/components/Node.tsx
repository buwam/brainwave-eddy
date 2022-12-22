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
  id: string;
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Flex
        width="175px"
        className="Node"
        cursor="pointer"
        fontSize=".5rem"
        textAlign="center"
        flexDir="column"
        textColor={THEME_COLORS.salmon}
      >
        <Flex
          bgColor={THEME_COLORS.peach}
          border={`1px solid ${THEME_COLORS.peach}`}
          borderBottom="none"
          fontWeight={600}
          justifyContent="space-b