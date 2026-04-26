interface ErrorMessageProps {
  message: string
  onRetry: () => void
  retryText?: string
}

export function ErrorMessage({ message, onRetry, retryText = "Tentar novamente" }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center">
      <div className="text-red-600 text-5xl mb-4">⚠️</div>
      <h3 className="text-lg font-semibold text-red-800 mb-2">
        Ops! Algo deu errado
      </h3>
      <p className="text-red-700 mb-4">{message}</p>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-[#2f3d3c] text-white rounded-lg hover:bg-[#243130] transition-colors"
      >
        {retryText}
      </button>
    </div>
  )
}