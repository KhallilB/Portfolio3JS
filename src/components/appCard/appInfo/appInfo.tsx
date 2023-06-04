import React from "react";

import ScreenshotCarousel from "../screenshotCarousel/screenshotCarousel";

const AppInfo = (): JSX.Element => {
  return (
    <div className="app_info_container">
      <h3>Title</h3>
      <p>Website</p>
      <div className="screenshots">
        <h4>Screenshots</h4>
        <ScreenshotCarousel />
      </div>
      <p>Tech Stack</p>
      <p>App Summary</p>
    </div>
  );
};

export default AppInfo;
