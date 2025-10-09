import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 px-4">
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
          Dashboard
        </h1>
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src="https://files.catbox.moe/3t3jd4.jpeg"
            alt="yaoyao_qiekn avatar, host by files.catbox.moe (maybe you need use proxy)"
            width={450}
            height={450}
            className="rounded-lg object-cover shadow-2xl border-4 border-white"
          />
        </div>

      </div>
    </div>
  );
}
