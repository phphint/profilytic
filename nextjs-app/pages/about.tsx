import Head from "next/head";
import GeneralLayout from "../components/GeneralLayout/GeneralLayoutAbout";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Proflytic</title>
        <meta
          name="description"
          content="Learn more about Proflytic, our mission, and how we are transforming the recruitment process."
        />
        {/* Add any additional relevant meta tags for the about page */}
      </Head>
      <GeneralLayout>
      <div className="about-content">
    {/* Content specific to the About page */}

        </div>
      </GeneralLayout>
    </>
  );
}
