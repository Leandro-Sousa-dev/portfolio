import { useNavHandler } from "../../hooks/useNavHandler"

export const NavButton = (props) => {
    const { handleNav } = useNavHandler()
    
    return (
        <a className="delay-100 duration-300 ease-in-out border-2 rounded-xl py-1 w-32 text-center hover:text-gray-300 hover:border-gray-400 md:w-48 md:text-2xl" href={`${props.href}`}>
            {props.children}
        </a>

    )
}