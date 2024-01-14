"use client";

import { SectionName } from "@/lib/types";
import React, { createContext, useContext, useMemo, useState } from "react";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  // memorize the calculation result and recalculate only if the array changes
  const values = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    }),
    [activeSection, setActiveSection],
  );
  return (
    <ActiveSectionContext.Provider value={values}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
/**
 * custom hook
 */
export function useActiveSectionContext() {
  const activeSectionContext = useContext(ActiveSectionContext);
  if (!activeSectionContext) {
    throw new Error(
      "useActiveSectionContext must be used in an ActiveSectionContextProvider",
    );
  }
  return activeSectionContext;
}
