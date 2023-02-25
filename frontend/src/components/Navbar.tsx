export default function Navbar() {
  return (
    <nav className="flex justify-center mt-8">
      <a
        className="m-2 font-sans text-2xl font-bold hover:underline"
        href="/courses"
      >
        <span>Courses</span>
      </a>
      <a
        className="m-2 font-sans text-2xl font-bold hover:underline"
        href="/login"
      >
        <span>Login</span>
      </a>
    </nav>
  );
}
