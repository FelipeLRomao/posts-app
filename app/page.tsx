'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Post } from '@/types/post'
import { PostCard } from '@/components/PostCard'
import { SearchBar } from '@/components/SearchBar'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { ErrorMessage } from '@/components/ErrorMessage'
import { LogoMoas } from '@/components/LogoMoas'

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }
      
      const data = await response.json()
      setPosts(data)
      setFilteredPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar os posts')
      console.error('Erro ao buscar posts:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPosts(posts)
    } else {
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredPosts(filtered)
    }
  }, [searchTerm, posts])

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="mb-8 text-center">
        <div className="inline-flex flex-col items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 mb-4">
          {/* Logo do Grupo Moas */}
          <LogoMoas width={250} height={250} />
          
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Posts App
            </h1>
            <p className="text-white/80 text-sm md:text-base mt-1">
              Grupo Moas
            </p>
          </div>
        </div>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Explore todos os posts da nossa comunidade
        </p>
      </header>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {loading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} onRetry={fetchPosts} />}

      {!loading && !error && (
        <>
          <div className="mb-4 text-white font-medium bg-[#2f3d3c]/80 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
            📊 {filteredPosts.length} post(s) encontrado(s)
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/posts/${post.id}`}>
                <PostCard post={post} />
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-white text-lg">
                Nenhum post encontrado para &quot;{searchTerm}&quot;
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}