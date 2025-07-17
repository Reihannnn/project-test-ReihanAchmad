import { useState } from "react"

const PostCard = ({ post }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const imageUrl = post.small_image?.[0]?.url 


  const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[4/3] bg-gray-200">
        <img
          src={imageUrl}
          alt={post.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-black border-t-orange-500 rounded-full animate-spin" />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-2">{formatDate(post.published_at)}</div>
        <h3 className="font-semibold text-gray-900 leading-tight">
          <span className="line-clamp-3 block">{post.title}</span>
        </h3>
      </div>
    </div>
  )
}

export default PostCard;