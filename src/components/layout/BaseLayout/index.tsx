"use client";
import Headings from "@/components/headers";
import LandingPage from "@/components/landingPage";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Headings />
      <div>
        <LandingPage />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default BaseLayout;
