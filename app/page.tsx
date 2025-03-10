import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f8fd] flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">Kola Calendar</h1>
        <p className="text-gray-600 mb-8">Your content calendar solution</p>
        
        <Link 
          href="/dashboard" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
