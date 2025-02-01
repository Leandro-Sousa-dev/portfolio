import { useInView } from "react-intersection-observer";
import { useNavHandler } from "../../hooks/useNavHandler";
import { useEffect } from "react";

export const Section = (props) => {
    const { activeLink, handleNav } = useNavHandler()
    const { ref, inView } = useInView(
        {
            threshold: 0.1,
            delay: 400
        }
    );
    useEffect(() => {
        if (inView && activeLink !== props.id) {
            handleNav(props.id);            
        }
    }, [inView])


    return (
        <section ref={ref} id={props.id} className="min-h-dvh overflow-x-hidden p-10 pt-20 dark:text-white md:p-20">
            {props.children}
        </section>
    )
}