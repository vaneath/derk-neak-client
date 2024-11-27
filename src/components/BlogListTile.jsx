import React from "react";

const BlogListTile = () => {
  const blogPosts = [
    {
      title: "Om Tuk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Donec ut mauris condimentum, vestib.",
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/2a331b184082587.Y3JvcCwzOTk5LDMxMjgsMCwzMjY.jpg",
    },
    {
      title: "Angkor Wat",
      description:
        "Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world, on a site measuring 162.6 hectares.",
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/2a331b184082587.Y3JvcCwzOTk5LDMxMjgsMCwzMjY.jpg",
    },
    // Add more blog posts here
  ];

  return (
    <div className='space-y-4'>
      {blogPosts.map((post, index) => (
        <div key={index} className='flex w-full rounded-lg overflow-hidden'>
          <img
            src={post.imageUrl}
            alt={post.title}
            className='w-24 sm:w-72 h-52 sm:h-auto object-cover'
          />
          <div className='flex flex-col justify-between pl-4 pt-2 space-y-2 flex-grow'>
            <div className='flex-grow'>
              <h1 className='text-base font-semibold mb-1'>{post.title}</h1>
              <p className='text-sm text-gray-600 line-clamp-5'>{post.description}</p>
            </div>
            <button className='bg-primary text-white py-1 px-4 rounded-md self-end'>
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogListTile;
