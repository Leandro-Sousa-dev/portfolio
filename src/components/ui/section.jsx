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
        <section ref={ref} id={props.id} className="overflow-x-hidden min-h-dvh dark:text-white pt-20 p-10 md:p-20">
            {props.children}
        </section>
    )
}