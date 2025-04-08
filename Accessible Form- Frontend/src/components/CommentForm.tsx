import React from "react";

const CommentForm = () => {
  return (
    <section className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-2">Leave a comment</h2>

      <h3 className="text-lg font-semibold mb-1">Leave a Reply</h3>
      <p className="text-sm text-gray-600 mb-4">
        Your email address will not be published. Required fields are marked{" "}
        <span className="text-red-500">*</span>
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="comment" className="block mb-1 text-sm font-medium">
            Comment <span className="text-red-500">*</span>
          </label>
          <textarea
            id="comment"
            required
            rows={5}
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <div>
          <label htmlFor="website" className="block mb-1 text-sm font-medium">
            Website
          </label>
          <input
            type="url"
            id="website"
            className="w-full border border-gray-300 p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white p-2 font-semibold"
        >
          POST COMMENT
        </button>
      </form>
    </section>
  );
};

export default CommentForm;
