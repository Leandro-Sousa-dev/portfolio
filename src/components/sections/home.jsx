import { Section } from "../ui/section"
import { HiArrowCircleDown } from "react-icons/hi";

export const SectionHome = () => {

    return (
        <Section id="home" >
            <div className="gap-5 h-[calc(100dvh-80px)] flex flex-col items-center">
                <div className="flex flex-col justify-center gap-5 grow text-white">
                    <h1 className="font-bold text-4xl md:text-6xl xl:text-9xl">Leandro Sousa </h1>
                    <h2 className="px-5 text-2xl md:text-4xl xl:text-5xl">Desenvolvedor Full Stack</h2>
                </div>
                <div className="justify-self-end">
                    <a href="#about">
                        <HiArrowCircleDown className="size-20 animate-bounce text-white" />
                    </a>
                </div>
            </div>

        </Section>
    )
}