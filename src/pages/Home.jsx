import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeSearchField from "../components/HomeSearchField";
import DestinationShortcut from "../components/DestinationShortcut";
import Section from "../components/Section";
import HorizontalImageCard from "../components/HorizontalImageCard";
import VerticalImageCard from "../components/VerticalImageCard";
import BlogListTile from "../components/BlogListTile";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeSearchField />
      <DestinationShortcut />
      <Section>
        <HorizontalImageCard />
        <HorizontalImageCard />
      </Section>

      <Section>
        <VerticalImageCard />
        <VerticalImageCard />
        <VerticalImageCard />
        <VerticalImageCard />
        <VerticalImageCard />
        <VerticalImageCard />
      </Section>

      <Section>
        <BlogListTile />
      </Section>
    </div>
  );
};

export default Home;
