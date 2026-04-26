export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2f3d3c]"></div>
      </div>
      <p className="mt-4 text-[#2f3d3c] font-medium">Carregando posts...</p>
    </div>
  )
}