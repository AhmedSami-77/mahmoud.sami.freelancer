import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <div
        className="flex items-center w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="px-6 sm:pl-20 md:pl-40 pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-3xl sm:text-4xl md:text-[50px] text-white font-semibold leading-tight">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              creative design.
            </span>
          </h1>
          <p className="text-gray-200 text-sm sm:text-base">
            Welcome! I hope to assist you with all your needs. Please take a
            moment to review my recent projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-base sm:text-lg text-white max-w-[200px] text-center"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-base sm:text-lg text-white max-w-[200px] text-center"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10] w-1/2 sm:w-auto">
        <Image
          src="/horse.png"
          alt="horse"
          height={480}
          width={360}
          className="absolute right-[35%] bottom-[40%] w-[54%] sm:w-[35%] md:w-[48%] lg:w-[55%] max-w-[500px]"
        />

        <Image
          src="/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
          className="w-full h-auto max-w-[280px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[350px] xl:max-w-[800px] "
        />
      </div>

      <div className="absolute bottom-0 z-[5] w-full">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-auto"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10] w-1/4 sm:w-auto"
      />
    </main>
  );
}
