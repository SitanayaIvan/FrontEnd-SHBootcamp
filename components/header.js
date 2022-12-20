import Link from "next/link";

export default function Header(href) {
  return (
    <div className="flex py-4 bg-blue-500 mb-14 border-b-2 border-b-blue-400 shadow-xl">
      <img className="w-24 h-24 mx-14" src="/logo.png" alt="logo.png" />
      <div className="flex space-x-20 my-10">
        <Link href={"/"}>
          <p className="hover:text-white">Home</p>
        </Link>
        <Link href={"public-speaking"}>
          <p className="hover:text-white">Public Speaking</p>
        </Link>
        <Link href={"programming"}>
          <p className="hover:text-white">Programming</p>
        </Link>
        <Link href={"content-writing"}>
          <p className="hover:text-white">Content Writing</p>
        </Link>
        <Link href={"about"}>
          <p className="hover:text-white">About</p>
        </Link>
      </div>
    </div>
  );
}
