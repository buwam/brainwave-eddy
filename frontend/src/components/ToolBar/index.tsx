import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon, VStack, Flex } from "@chakra-ui/react";
import { THEME_COLORS } from "../../util";
import { ArrowBackIcon, ChatIcon, InfoIcon } from "@chakra-ui/icons";
import { GoListUnordered } from "react-icons/go";
import { NAVIGATION_STATE, useNavigation } from "../../hooks/useNavigation";

interface NavLink {
  link: string | null;
  icon: React.ReactNode;
  onClick: () => void;
}

export function ToolBar() {
  const location = useLocation();
  const { navigationState, setNavigationState } = useNavigation();

  // Check if the current pathname is '/about'
  const notFoundNavLinks: NavLink[] = [
    {
      link: "/",
      icon: <ArrowBackIcon />,
      onClick: () => {},
    },
  ];

  const aboutNavLinks = [
    {
      link: "/",
      icon: <ArrowBackIcon />,
      onClick: () => {},
    },
  ];
  const listNavLinks = [
    {
      