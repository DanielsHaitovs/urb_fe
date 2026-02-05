import type { ScreenType } from "@/types/deviceType";

import { useEffect, useState } from "react";

export default function useScreenType(): ScreenType {
  const [screenType, setScreenType] = useState<ScreenType>("mobile");

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 768) {
        setScreenType("mobile");
      } else if (window.innerWidth < 993) {
        setScreenType("tablet");
      } else {
        setScreenType("desktop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
}
