'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Post } from '@/types/post'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { ErrorMessage } from '@/components/ErrorMessage'
import { PostImage } from '@/components/PostImage'

export default function PostDetail() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`
        )
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Post não encontrado')
          }
          throw new Error(`Erro HTTP: ${response.status}`)
        }
        
        const data = await response.json()
        setPost(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar o post')
        console.error('Erro ao buscar post:', err)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchPost()
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <ErrorMessage 
          message={error} 
          onRetry={() => router.push('/')}
          retryText="Voltar para o início"
        />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <ErrorMessage 
          message="Post não encontrado" 
          onRetry={() => router.push('/')}
          retryText="Voltar para o início"
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-white bg-[#2f3d3c] hover:bg-[#243130] px-4 py-2 rounded-lg mb-6 transition-colors"
      >
        ← Voltar para a listagem
      </Link>

      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Imagem em destaque no topo */}
        <PostImage postId={post.id} className="h-96 w-full" />
        
        <div className="p-6 md:p-8">
          <header className="mb-6">
            <div className="text-sm text-[#4a5a58] mb-2">
              Post #{post.id} • Usuário ID: {post.userId}
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2f3d3c]">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-[#b8c4ba]/20 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {post.body}
              </p>
            </div>
          </div>

          <footer className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2f3d3c] text-white rounded-lg hover:bg-[#243130] transition-colors font-medium"
            >
              ← Ver todos os posts
            </Link>
          </footer>
        </div>
      </article>
    </div>
  )
}