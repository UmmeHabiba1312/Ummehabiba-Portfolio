import Footer from "@/components/footer";
import Image from "next/image";


export default function MySkills() {
    const skills = [
        { name: "NextJS", image: "/nextjs1.png" },
        { name: "TypeScript", image: "/typescript.png" },
        { name: "JavaScript", image: "/javascript1.png" },
        { name: "Tailwind CSS", image: "/tailwindcss.png" },
        { name: "HTML5", image: "/html.png" },
        { name: "CSS", image: "/css1.png" },
        { name: "ShadCN", image: "/shadcn.png" },
        // { name: "ReactJS", image: "/images/react.png" },
        { name: "Git", image: "/git.png" },
        { name: "GitHub", image: "/github.png" },
        // { name: "Bootstrap", image: "/images/bootstrap.png" },
        { name: "Figma", image: "/figma.png" },
    ];

    return (
      <>
      <main className="animate-fadeIn">
        <div className="max-w-screen-2xl mx-auto bg-gray-300 px-6 md:px-10 lg:px-14 py-12 rounded-lg shadow-lg pb-40 w-[100vw]">
           <h2 className={`text-pink-800 text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-2 sm:pt-4`}>
            My Skills
          </h2>
          <p className="text-gray-600 text-center mt-4 text-base sm:text-lg">
              Tools and technologies I use to create and optimize web applications.
          </p>

          {/* Updated grid layout */}
          <div className=" mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 lg:grid-cols-5 sm:gap-y-6 sm:gap-x-8 xl:gap-x-14 text-center">
              {skills.map((skill, index) => (
                  <div 
                      key={index} 
                      className="rounded-xl bg-gray-300 pt-3 pb-2 sm:py-4  shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out"
                  >
                      {/* Skill Image */}
                      <Image
                          src={skill.image}
                          alt={`${skill.name} Icon`}
                          width={50}
                          height={50}
                          className="mb-2 sm:mb-4 w-[35px] h-[35px] sm:w[50px] sm:h-[50px] lg:w-[55px] lg:h-[50px]"
                      />
                      {/* Skill Name */}
                      <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">{skill.name}</p>
                  </div>
              ))}
          </div>
        </div></main>
        <Footer/>
        </>
    );
}