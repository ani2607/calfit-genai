import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link href="#" className="text-xl font-bold">Cal-Fit</Link>
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-gray-400">Home</Link>
          <Link href="#" className="hover:text-gray-400">Leaderboard</Link>
          <Link href="#" className="hover:text-gray-400">Premium</Link>
          <Link href="#" className="hover:text-gray-400">Analytics</Link>
        </div>
        <button className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
          Sign In
        </button>
      </div>
    </nav>
  );
}
