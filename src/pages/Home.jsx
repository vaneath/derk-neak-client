import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeSearchField from "../components/HomeSearchField";
import DestinationShortcut from "../components/DestinationShortcut";
import Section from "../components/Section";
import HorizontalImageCard from "../components/HorizontalImageCard";
import VerticalImageCard from "../components/VerticalImageCard";
import BlogListTile from "../components/BlogListTile";
import home from "../data/home";

const Home = () => {
  const section1 = home.section1;
  const section2 = home.section2;
  const section3 = home.section3;
  return (
    <div>
      <HomeHeader />
      <HomeSearchField />
      <DestinationShortcut />

      <Section
        key={section1.id}
        title={section1.title}
        description={section1.description}
      >
        {section1.items.map((item) => (
          <HorizontalImageCard
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        ))}
      </Section>

      <Section
        key={section2.id}
        title={section2.title}
        description={section2.description}
      >
        {section2.items.map((item) => (
          <VerticalImageCard
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        ))}
      </Section>

      <Section
        key={section3.id}
        title={section3.title}
        description={section3.description}
      >
        <BlogListTile blogs={section3.items} />
      </Section>
    </div>
  );
};

export default Home;
