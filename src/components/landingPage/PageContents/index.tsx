import LandingSlideShow from "@/components/slideshow";
import { serviceList } from "@/constants/landing-page-const";
import React from "react";

function PageContents() {
  const icon = serviceList.map((service) => service.icon);
  const title = serviceList.map((service) => service.title);
  const image = serviceList.map((service) => service.phone);
  return (
    <div>
      <LandingSlideShow
        icon={icon}
        image={image}
        title={title}
        duration={4000}
      />
    </div>
  );
}

export default PageContents;
