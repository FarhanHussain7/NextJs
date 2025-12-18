// app/topics/page.js
// Topics page with links to login for routing demonstration
import Link from "next/link";

export default function LecturePage({ params }) {
  const { lecture } = params;
  return (
    <div>
      <h1>Lecture Page</h1>
      <Link href="/login">Routing</Link>
      <Link href="/login">Routing</Link>
      <Link href="/login">Routing</Link>
      <Link href="/login">Routing</Link>

    </div>
  );
}