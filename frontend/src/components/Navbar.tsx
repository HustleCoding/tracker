import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center mt-8">
      <Link
        className="m-2 font-sans text-2xl font-bold hover:underline"
        href="/"
      >
        <span>Home</span>
      </Link>
      <Link
        className="m-2 font-sans text-2xl font-bold hover:underline"
        href="/courses"
      >
        <span>Courses</span>
      </Link>
      <Link
        className="m-2 font-sans text-2xl font-bold hover:underline"
        href="/login"
      >
        <span>Login</span>
      </Link>
    </nav>
  );
}
