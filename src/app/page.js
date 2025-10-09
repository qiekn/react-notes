import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 drop-shadow-md">
          qiekn xxx
        </h1>
        <Link
          href="/tic-tac-toe"
          className="block w-full max-w-xs mx-auto mb-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 text-center"
        >
          🎮 Game: Tic Tac Toe
        </Link>
        <Link
          href="/dg-lab"
          className="block w-full max-w-xs mx-auto mb-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 text-center"
        >
          DG Lab WebSocket Control Pannel
        </Link>
        <h2 className="text-2xl font-medium text-gray-600 mb-6">
          Just for test navigation
        </h2>
        <div className="space-y-3">
          <Link
            href="/blog"
            className="block px-6 py-3 bg-white text-gray-700 font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
          >
            📝 Blog
          </Link>
          <Link
            href="/about"
            className="block px-6 py-3 bg-white text-gray-700 font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
          >
            ℹ️ About
          </Link>
          <Link
            href="/dashboard"
            className="block px-6 py-3 bg-white text-gray-700 font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
          >
            📊 Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
