import React from "react";

const BlogListTile = ({ blogs }) => {
  return (
    <div className='space-y-4'>
      {blogs.map((blog, index) => (
        <div key={index} className='flex w-full rounded-lg overflow-hidden'>
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className='w-24 sm:w-72 h-52 object-cover'
          />
          <div className='flex flex-col justify-between pl-4 pt-2 space-y-2 flex-grow'>
            <div className='flex-grow'>
              <h1 className='text-base font-semibold mb-1'>{blog.title}</h1>
              <p className='text-sm text-gray-600 line-clamp-5'>
                {blog.description}
              </p>
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
