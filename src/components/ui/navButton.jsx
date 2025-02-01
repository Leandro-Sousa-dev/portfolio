import { useNavHandler } from "../../hooks/useNavHandler"

export const NavButton = (props) => {
    const { handleClick } = useNavHandler()

    return (
        <a className="w-32 rounded-xl border-2 py-1 text-center delay-100 duration-300 ease-in-out hover:border-gray-400 hover:text-gray-300 md:w-48 md:text-2xl" href={`${props.href}`} onClick={(e) => { handleClick(e, `${props.href}`) }}>
            {props.children}
        </a>

    )
}