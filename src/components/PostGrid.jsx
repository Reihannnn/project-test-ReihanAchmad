import LoadingSkeleton from "./LoadingSkeleton/LoadingSkeleton";
import PostCard from "./PostCard";

const PostGrid = ({ posts, loading }) => {
  const range = (n) => [...Array(n).keys()];

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-auto w-[85%]">
        {range(10).map((index) => (
          <LoadingSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 w-[83%] m-auto">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;
