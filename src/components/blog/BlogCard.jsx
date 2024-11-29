import React from "react";

const BlogCard = ({ blogs }) => {
  return (
    <div className='flex justify-start items-center space-x-4 shadow-md'>
      {blogs.map((blog, index) => (
        <div key={index} className='w-64 h-auto rounded-lg overflow-hidden'>
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className='w-full h-64 object-cover'
          />
          <div className='flex flex-col justify-between  bg-gray-100 p-4'>
            <div>
              <h1 className='text-base font-semibold mb-1'>{blog.title}</h1>
              <p className='text-sm text-gray-600 line-clamp-3'>
                {blog.description}
              </p>
            </div>
            <button className='bg-primary text-white py-1 px-4 rounded-md mt-4'>
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
