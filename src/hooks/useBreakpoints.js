import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

const getDeviceConfig = (width) => {
  let DeviceConfig = {
    isDesktop: false,
    isTablet: false,
    isMobile: false,
    isSmallMobile: false,
  };
  if (width <= 400) {
    DeviceConfig.isSmallMobile = true;
  } else if (width <= 500) {
    DeviceConfig.isMobile = true;
  } else if (width >= 500 && width <= 1080) {
    DeviceConfig.isTablet = true;
  } else {
    DeviceConfig.isDesktop = true;
  }

  return DeviceConfig;
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBreakpoint(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return breakpoint;
};
export default useBreakpoint;
