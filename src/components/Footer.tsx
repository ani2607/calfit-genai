import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-6 text-center">
      <p>Site Links</p>
      <div className="flex justify-center space-x-4 mt-2">
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
        <Link href="#">Policies</Link>
      </div>
    </footer>
  );
}
