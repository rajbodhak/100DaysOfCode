import { StarsBackground } from "./ui/stars-background";

const CTA: React.FC = () => {
    return (
        <section className="text-center py-10 bg-gradient-to-b from-[#5A189A] to-[#0A043C] text-white">
            <h2 className="text-4xl font-semibold">Fall in Love with the Dream</h2>
            <p className="mt-3 text-lg">Watch La La Land and experience the magic.</p>
            <button className="mt-6 px-6 py-3 text-lg font-semibold bg-pink-500 rounded-lg shadow-lg hover:bg-pink-400 transition">
                Watch Now
            </button>
            <StarsBackground />
        </section>
    );
};

export default CTA;
