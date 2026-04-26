import { Post } from '@/types/post'
import { PostImage } from './PostImage'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const truncatedBody = post.body.length > 25 
    ? `${post.body.substring(0, 25)}...` 
    : post.body

  return (
    <div className="bg-white rounded-lg shadow-md card-hover cursor-pointer h-full flex flex-col overflow-hidden border-t-4 border-t-[#2f3d3c]">
      {/* Imagem do post */}
      <PostImage postId={post.id} className="h-48 w-full" />
      
      <div className="p-6 flex-grow flex flex-col">
        <h2 className="text-xl font-semibold text-[#2f3d3c] mb-3 line-clamp-2 min-h-[64px]">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4 flex-grow">
          {truncatedBody}
        </p>
        <div className="flex justify-between items-center text-sm mt-auto pt-4 border-t border-gray-100">
          <span className="text-[#4a5a58]">👤 Usuário: {post.userId}</span>
          <span className="text-[#2f3d3c] hover:text-[#b8c4ba] font-medium transition-colors">
            Ler mais →
          </span>
        </div>
      </div>
    </div>
  )
}