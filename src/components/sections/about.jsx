import { Blockquote } from "flowbite-react"
import { Section } from "../ui/section"
import { ButtonFB } from "../ui/button"
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin, AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
import { WiStars } from "react-icons/wi";
import { NavButton } from "../ui/navButton";
import { AosAnimate } from "../aosAnimate";

export const SectionAbout = () => {

    return (
        <Section id="about">
            <AosAnimate>
                <div data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-anchor-placement="top" className="min-h-[calc(100dvh-80px)] flex flex-col items-center gap-10 p-2 xl:flex-row-reverse xl:justify-center xl:items-center">
                    <div className="flex flex-col items-center">
                        <div className="border-4 border-gray-500 rounded-full overflow-hidden m-5">
                            <img className="w-96" src="/images/leandro.jpg" alt="Leandro Sousa" />
                        </div>
                        <div className="flex flex-col sm:flex-row text-gray-100 items-center gap-3 mxl:gap-10">
                            <NavButton href='#projects'>
                                Projetos
                            </NavButton>
                            <div className="flex">
                                <WiStars className="hidden sm:block size-16" />
                            </div>
                            <NavButton href='#skills'>
                                Habilidades
                            </NavButton>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <Blockquote className="text-xs max-w-[900px] font-light tracking-wide sm:text-base sm:leading-7 not-italic bg-gray-100 dark:bg-[rgba(0,0,0,0.4)] p-4 rounded-lg">
                            Descobri na programação uma forma de canalizar minha paixão por desafios e evolução contínua. Meu objetivo é sempre enfrentar os obstáculos da melhor maneira possível, aprendendo e melhorando ao longo do caminho. Valorizo a colaboração, estando presente em reuniões, contribuindo com críticas construtivas e opiniões sinceras. Há pouco mais de um ano, tive minha primeira oportunidade como desenvolvedor Frontend. Essa experiência me despertou o interesse em expandir minhas habilidades para o Backend, buscando ir além da interface do usuário e me capacitar a desenvolver aplicações Web de forma completa e integrada.
                        </Blockquote>
                        <div className="flex gap-10 flex-col items-center sm:flex-row sm:justify-center">
                            <ButtonFB color='darkIndigo' href='https://github.com/Leandro-Sousa-dev'>
                                <AiFillGithub className="mr-2 h-5 w-5" />
                                GitHub
                            </ButtonFB>
                            <ButtonFB color='blue' href='https://www.linkedin.com/in/jos%C3%A9-leandro-7ba007261/'>
                                <AiFillLinkedin className="mr-2 h-5 w-5" />
                                LinkedIn
                            </ButtonFB>
                            <ButtonFB color='red' href='/Leandro_DevWebFullStack.pdf'>
                                <AiFillFilePdf className="mr-2 h-5 w-5" />
                                Meu CV
                            </ButtonFB>
                        </div>
                    </div>
                </div>
            </AosAnimate>
        </Section>
    )
}