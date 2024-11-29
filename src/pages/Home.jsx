import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import HomeSearchField from "../components/home/HomeSearchField";
import DestinationShortcut from "../components/home/DestinationShortcut";
import Section from "../components/shared/Section";
import HorizontalImageCard from "../components/card/HorizontalImageCard";
import VerticalImageCard from "../components/card/VerticalImageCard";
import home from "../data/home";

const Home = () => {
  const section1 = home.section1;
  const section2 = home.section2;
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
    </div>
  );
};

export default Home;
