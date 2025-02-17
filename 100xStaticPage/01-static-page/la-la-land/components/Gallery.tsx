import Image from "next/image";
import MusicPlayer from "./MusicPlayer";

const images = [
    { src: "/images/both-in-blue-room.webp", width: 400, height: 500 },
    { src: "/images/playing-piano-back.webp", width: 450, height: 550 },
    // { src: "/images/dancing-on-bridge.webp", width: 300, height: 400 },
    { src: "/images/dancing-under-star.webp", width: 500, height: 600 },
    { src: "/images/looking-at-each-other.webp", width: 350, height: 450 },
    { src: "/images/playing-piano.webp", width: 450, height: 550 },
    { src: "/images/emma-in-theater.webp", width: 320, height: 380 },
];

const Gallery = () => {
    return (
        <div className="bg-gradient-to-b from-[#0A043C] via-[#5A189A] to-[#0A043C] text-white p-5 z-10">
            <div className="max-w-6xl mx-auto flex flex-col gap-6">
                {/* Gallery Section */}
                <div className="w-full">
                    <div className="columns-2 md:columns-3 gap-4 space-y-4">
                        {images.map((image, index) => (
                            <div key={index} className="break-inside-avoid">
                                <Image
                                    src={image.src}
                                    width={image.width}
                                    height={image.height}
                                    className="w-full h-auto rounded-lg"
                                    alt={image.src.split("/").pop()?.replace(".webp", "") || "Gallery Image"}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Music Player Section (Always Below) */}
                <div className="w-full">
                    <MusicPlayer />
                </div>
            </div>
        </div>
    );
};
export default Gallery;
