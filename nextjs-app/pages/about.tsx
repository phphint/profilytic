import Head from "next/head";
import GeneralLayout from "../components/GeneralLayout/GeneralLayoutAbout";

export default function About() {
  return (
    <>
<Head>
  <title>About Us - Proflytic</title>
  <meta
    name="description"
    content="Meet the team behind Proflytic and our vision to revolutionize recruitment with AI. Learn about our dedication to creating efficient, AI-powered resume screening solutions that save time and enhance hiring processes."
  />
  {/* Additional meta tags can be added here if needed */}
</Head>

      <GeneralLayout>
      <div className="about-content">
    {/* Content specific to the About page */}

        </div>
      </GeneralLayout>
    </>
  );
}
