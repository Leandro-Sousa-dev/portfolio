import { AosAnimate } from "../aosAnimate";
import { Section } from "../ui/section"

import { FaGitAlt,FaNpm } from "react-icons/fa";
import {
    SiTypescript,
    SiReact,
    SiReactquery,
    SiReactrouter,
    SiFirebase,
    SiVite,
    SiStyledcomponents,
    SiJavascript,
    SiTailwindcss,
    SiCss3,
    SiGithubpages,
    SiSass,
    SiPostgresql,
    SiGithub,
    SiDocker,
    SiNodedotjs,
    SiJest,
    SiHtml5,
    SiExpress,
    SiVercel,
    SiSwagger,
    SiPrisma,
    SiPwa,
} from "react-icons/si"
import { SkillCard } from "../cards/skills";


export const SectionSkills = () => {
    return (
        <Section id="skills" >
            <AosAnimate>
                <div className="flex flex-col items-center gap-10">

                    <div className="text-4xl text-white" data-aos="fade-up">
                        <h3>Habilidades</h3>
                    </div>

                    <div className="flex flex-col justify-center gap-10 lg:flex-row">
                        <div data-aos="fade-up-left">
                            <SkillCard >
                                <SiReact title="React" />
                                <SiTypescript title="TypeScript"/>
                                <SiJavascript title="JavaScript" />
                                <SiVite title="Vite"/>
                                <SiPwa title="PWA"/>
                                <SiJest title="Jest"/>
                                <SiReactquery title="React Query"/>
                                <SiReactrouter title="React Router"/>
                                <SiStyledcomponents title="Styled Components"/>
                                <SiSass title="Sass"/>
                                <SiTailwindcss title="Tailwind CSS"/>
                                <SiCss3 title="CSS3"/>
                                <SiPrisma title="Prisma"/>
                                <SiDocker title="Docker"/>
                                <SiPostgresql title="PostgreSQL"/>
                                <SiNodedotjs title="Node.js"/>
                                <SiExpress title="Express.js"/>
                                <SiFirebase title="Firebase"/>
                                <SiVercel title="Vercel"/>
                                <SiHtml5 title="HTML5"/>
                                <FaGitAlt title="Git"/>
                                <SiGithubpages title="GitHub Pages"/>
                                <SiGithub title="GitHub"/>
                                <SiSwagger title="Swagger"/>
                                <FaNpm title="npm"/>
                            </SkillCard>
                        </div>
                    </div>
                </div>
            </AosAnimate>
        </Section>
    )
}