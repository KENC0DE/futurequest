import React from "react";

function SocialFeed() {
  return (
    <section className="py-16 px-8 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Social Feed</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Example social media posts */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Post Title 1</h3>
          <p className="text-gray-600">
            This is a brief description of the post content.
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Post Title 2</h3>
          <p className="text-gray-600">
            This is a brief description of the post content.
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Post Title 3</h3>
          <p className="text-gray-600">
            This is a brief description of the post content.
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Post Title 4</h3>
          <p className="text-gray-600">
            This is a brief description of the post content.
          </p>
        </div>
        {/* Add more posts as needed */}
      </div>
    </section>
  );
}

export default SocialFeed;
