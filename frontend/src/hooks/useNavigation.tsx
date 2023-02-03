import { createContext, ReactNode, useContext, useState } from "react";

export enum NAVIGATION_STATE {
  SUMMARY = "summary",
  GRAPH = "graph",
  ABOUT = "about",
}
interface NavigationContextInterface {
  navigationState: NAVIGATION_STATE;
  setNavigationState: (state: NAVIGATION_STATE) => void;
}
export const NavigationContext = createContext<Navigat