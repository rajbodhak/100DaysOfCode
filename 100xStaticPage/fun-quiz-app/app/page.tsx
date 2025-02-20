"use client"
import Image from "next/image";
import { useUser } from "@/context/UserContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [inputName, setInputName] = useState("");
  const { setName } = useUser();
  const router = useRouter();

  const handleRedirectToTroll = () => {
    if (inputName.trim()) {
      setName(inputName);
      router.push("/troll");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-spaceGrotesk ">
      <h1 className="text-xl font-bold mb-2">Hello Welcome to <span className="text-pink-300">BakchoQuiz</span></h1>
      <Image
        src="/cute-cat.webp"
        alt="Cute Cat"
        height={150}
        width={150}
        className="rounded-lg shadow-lg"
      />
      <h1 className="my-2 font-bold text-lg">
        <span className="text-pink-300">
          Please!
        </span> Enter Your Name
      </h1>
      <input
        id="name"
        type="text"
        value={inputName}
        placeholder="Catty Boss"
        className="input-style mb-3"
        onChange={(e) => setInputName(e.target.value)}
      />

      <button
        onClick={handleRedirectToTroll}
        className="btn-primary">
        Go!
      </button>


    </div>
  );
}
