import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
