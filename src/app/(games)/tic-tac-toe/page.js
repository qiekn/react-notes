import Board from "./components/board.js";
import Link from "next/link";

export default function TicTacToe() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <div className="text-center max-w-md w-full">

        {/* return menu */}
        <div className="flex justify-center w-full mb-6">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-white text-gray-700 font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
          >
            ← Return Home
          </Link>
        </div>

        <h1 className="text-5xl font-bold text-gray-800 mb-8 drop-shadow-md">
          井字棋
        </h1>
        <Board />


      </div>
    </div>
  );
}
