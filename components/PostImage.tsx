interface PostImageProps {
  postId: number
  className?: string
}

export function PostImage({ postId, className = "" }: PostImageProps) {
  // Usa o postId para gerar uma imagem diferente para cada post
  const imageUrl = `https://picsum.photos/id/${(postId % 100) + 1}/400/200`
  
  return (
    <div className={`overflow-hidden bg-[#b8c4ba] ${className}`}>
      <img
        src={imageUrl}
        alt={`Imagem do post ${postId}`}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  )
}