// app/topics/page.js
// Topics page with links to login for routing demonstration
import Link from "next/link";

export default function LecturePage({ params }) {
  const { lecture } = params;
  return (
    <div>
      <h1>Lecture Page</h1>
      <details>
        <summary>Routing</summary>
        <Link href="/login" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">Login Page</Link>
       <Link href="/about">Routing (about)</Link>
      <Link href="/login">Routing (login)</Link>
      </details>

      <details>
        <summary>Nested Routing</summary>

      </details>
      <details>
        <summary>API Calls</summary>
        <Link href="/api/ClientApi" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">API Call (Client)</Link>
        <Link href="/api/serverApi" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">API Call (Server)</Link>
      </details>
      <Link href="/login">Routing</Link>
      <Link href="/login">Routing</Link>

    </div>
  );
}