import { Card, CardContent } from "@/components/ui/card";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <Card className="w-full max-w-[100vw] mx-auto rounded-2xl shadow-lg bg-opacity-50">
      <CardContent className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-6 sm:p-10">
        {/* Profile Image */}
        <img
          src="src/assets/header_photo.jpg"
          alt="Profile"
          className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl object-cover border-4 border-gray-200"
        />

        {/* Text Content */}
        <div className="flex flex-col justify-center flex-1 space-y-4 items-center text-center sm:items-start sm:text-left">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">Kavanaugh Frank</h1>
            <p className="text-xl sm:text-2xl mt-1">Software Engineer</p>
          </div>

          {/* Description Paragraph */}
          <p className="w-full text-sm sm:text-base leading-relaxed">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam velit corrupti sapiente magni totam suscipit culpa voluptatem quidem aliquid labore! Nesciunt ducimus qui iste voluptas deserunt ratione quae quam provident! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga debitis temporibus porro ratione, alias labore nemo iure ad pariatur voluptates aspernatur sequi fugiat aut sit molestiae error fugit nihil minima!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/kavanaugh-frank"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/Kavanaugh-Frank"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-black transition-colors"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
