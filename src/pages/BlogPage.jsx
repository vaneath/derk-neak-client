import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import HomeSearchField from "../components/home/HomeSearchField";
import Section from "../components/shared/Section";
import BlogListTile from "../components/blog/BlogListTile";
import blogs from "../data/blogs";
import BlogCard from "../components/blog/BlogCard";

const BlogPage = () => {
  const latest = blogs.latest;
  const hot = blogs.hot;
  return (
    <div>
      <HomeHeader />
      <HomeSearchField />
      <Section
        key={latest.id}
        title={latest.title}
        description={latest.description}
      >
        <BlogListTile blogs={latest.items} />
      </Section>

      <Section key={hot.id} title={hot.title} description={hot.description}>
        <BlogCard blogs={hot.items} />
      </Section>
    </div>
  );
};

export default BlogPage;
