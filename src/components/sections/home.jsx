import { useNavHandler } from "../../hooks/useNavHandler";
import { Section } from "../ui/section"
import { HiArrowCircleDown } from "react-icons/hi";

export const SectionHome = () => {
    const { handleClick } = useNavHandler()

    return (
        <Section id="home" >
            <div className="flex h-[calc(100dvh-80px)] flex-col items-center gap-5">
                <div className="flex grow flex-col justify-center gap-5 text-white">
                    <h1 className="text-4xl font-bold md:text-6xl xl:text-9xl">Leandro Sousa </h1>
                    <h2 className="px-5 text-2xl md:text-4xl xl:text-5xl">Desenvolvedor Full Stack</h2>
                </div>
                <div className="justify-self-end">
                    <a href="#about" onClick={(e) => { handleClick(e, '#about') }}>
                        <HiArrowCircleDown className="size-20 animate-bounce text-white" />
                    </a>
                </div>
            </div>

        </Section>
    )
}