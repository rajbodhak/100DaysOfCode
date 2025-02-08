import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-bold text-3xl">Hello</h1>
      <button>
        <Link className="bg-slate-800 py-3 px-4 rounded-xl" href={`/users`}>Explore Users</Link>
      </button>
    </div>
  );
}
