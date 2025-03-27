
export const HeroSection = () => {
  return (
    <div className="relative z-0 overflow-x-clip h-[100vh] flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center mx-20 md:mx-40">
        <h1 className="text-3xl md:text-5xl text-center mt-8 tracking-wide">
          Hi, I am Papangkorn
        </h1>
        <p className="mt-4 text-center">
          I am currently a Computer Science major with a strong interest in
          programming, software development, and problem-solving. I enjoy
          learning about new technologies and improving my coding skills. My
          goal is to apply my knowledge to real-world applications and
          contribute to innovative projects in the tech industry.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-black/50 px-6 h-12 rounded-xl hover:bg-gray-900 hover:border-black hover:text-white transition duration-350">
          <span className="font-semibold">Explore My Work</span>
        </button>
        <button className="inline-flex items-center gap-2 border border-black bg-gray-900 text-white h-12 px-6 rounded-xl hover:bg-white hover:border-black/50 hover:text-black transition duration-350">
          <span>📩</span>
          <span className="font-semibold">Let's Connect </span>
        </button>
      </div>
    </div>
  );
}

export default HeroSection
