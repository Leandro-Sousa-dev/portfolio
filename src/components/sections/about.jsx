import { Blockquote } from "flowbite-react"
import { Section } from "../ui/section"
import { ButtonFB } from "../ui/button"
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { WiStars } from "react-icons/wi";
import { NavButton } from "../ui/navButton";
import { AosAnimate } from "../aosAnimate";

export const SectionAbout = () => {

    return (
        <Section id="about">
            <AosAnimate>
                <div data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-anchor-placement="top" className="flex min-h-[calc(100dvh-80px)] flex-col items-center gap-10 p-2 xl:flex-row-reverse xl:items-center xl:justify-center">
                    <div className="flex flex-col items-center">
                        <div className="m-5 overflow-hidden rounded-full border-4 border-gray-500">
                            <img className="w-96" src="/images/leandro.jpg" alt="Leandro Sousa" />
                        </div>
                        <div className="mxl:gap-10 flex flex-col items-center gap-3 text-gray-100 sm:flex-row">
                            <NavButton href='#projects'>
                                Projetos
                            </NavButton>
                            <div className="flex">
                                <WiStars className="hidden size-16 sm:block" />
                            </div>
                            <NavButton href='#skills'>
                                Habilidades
                            </NavButton>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <Blockquote className="max-w-[900px] rounded-lg bg-gray-100 p-4 text-sm font-light not-italic tracking-wide dark:bg-[rgba(0,0,0,0.4)] sm:text-base sm:leading-7">
                            Descobri na programação uma forma de canalizar minha paixão por desafios e evolução contínua. Meu objetivo é sempre enfrentar os obstáculos da melhor maneira possível, aprendendo e melhorando ao longo do caminho. Valorizo a colaboração, estando presente em reuniões, contribuindo com críticas construtivas e opiniões sinceras. Há pouco mais de um ano, tive minha primeira oportunidade como desenvolvedor Frontend. Essa experiência me despertou o interesse em expandir minhas habilidades para o Backend, buscando ir além da interface do usuário e me capacitar a desenvolver aplicações Web de forma completa e integrada.
                        </Blockquote>
                        <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-center">
                            <ButtonFB color='darkIndigo' href='https://github.com/Leandro-Sousa-dev'>
                                <AiFillGithub className="mr-2 size-5" />
                                GitHub
                            </ButtonFB>
                            <ButtonFB color='blue' href='https://www.linkedin.com/in/jos%C3%A9-leandro-7ba007261/'>
                                <AiFillLinkedin className="mr-2 size-5" />
                                LinkedIn
                            </ButtonFB>
                            <ButtonFB color='red' href='/Leandro_DevWebFullStack.pdf'>
                                <AiFillFilePdf className="mr-2 size-5" />
                                Meu CV
                            </ButtonFB>
                        </div>
                    </div>
                </div>
            </AosAnimate>
        </Section>
    )
}