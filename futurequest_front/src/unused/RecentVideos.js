import React from "react";

function RecentVideos() {
  return (
    <section className="py-16 px-8 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-8">Recent Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {/* Add your recent video thumbnails here */}
        <div className="bg-white p-4 rounded shadow">
          {/* Video Thumbnail Example */}
          <img
            src="path/to/thumbnail.jpg"
            alt="Video Thumbnail"
            className="w-full h-auto rounded mb-2"
          />
          <h3 className="text-lg font-semibold">Video Title</h3>
        </div>
        {/* Repeat for more video thumbnails */}
      </div>
      <a
        href="#"
        className="inline-block mt-8 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        Visit Channel
      </a>
    </section>
  );
}

export default RecentVideos;
