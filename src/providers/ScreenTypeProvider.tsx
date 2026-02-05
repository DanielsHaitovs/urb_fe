"use client";

import useScreenType from "@/lib/screenType";
import type { ScreenType } from "@/types/deviceType";

import React, { createContext, type JSX, useContext } from "react";

const ScreenTypeContext = createContext<ScreenType>("mobile");

export const ScreenTypeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const deviceType = useScreenType();
  return (
    <ScreenTypeContext.Provider value={deviceType}>
      {children}
    </ScreenTypeContext.Provider>
  );
};

export const useScreenSize = (): ScreenType => useContext(ScreenTypeContext);
