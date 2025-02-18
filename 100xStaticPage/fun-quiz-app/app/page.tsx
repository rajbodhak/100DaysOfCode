import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-spaceGrotesk bg-gradient-to-br from-black/50 via-white/5 to-black/50">
      <h1 className="text-lg font-bold">Hello Welcome to BakchoQuiz</h1>
      <Image src={"/cute-cat.webp"}
        alt="Cute Cat"
        height={150}
        width={150}
        className="rounded-xl"
      />
      <h1 className="my-2 font-bold text-lg">
        <span className="text-pink-300">
          Please!
        </span> Enter Your Name
      </h1>
      <input
        id="name"
        type="text"
        placeholder="Catty Boss"
        className="input-style mb-3"
      />
      <Link href={"/troll"}>
        <button
          className="btn-primary">
          Go!
        </button>
      </Link>

    </div>
  );
}
