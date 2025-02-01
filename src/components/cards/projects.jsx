import { Card } from "flowbite-react";
import { ButtonFB } from "../ui/button";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import { GoFileDirectoryFill } from "react-icons/go";

export const ProjetcCard = (props) => {
    return (
        <div className="flex h-full justify-center">
            <Card
                theme={{
                    "root": {
                        "children": "flex h-full flex-col justify-between gap-4 p-6",
                    }
                }}
                className=" light:bg-gray-100 h-full max-w-xl justify-between border-0 dark:bg-[rgba(0,0,0,0.4)]"
                imgAlt={props.imgAlt}
                imgSrc={props.imgSrc}

            >

                <h5 className="light:text-black text-center text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
                    {props.tittle}
                </h5>
                <div className="flex grow flex-col">
                    <p className="light:text-gray-800 grow text-center text-gray-700 dark:text-gray-100" >
                        {props.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-5 p-5">
                        {
                            typeof props.children == 'object' ? props.children.map((el, i) => {
                                return (
                                    <p key={i} className="text-4xl">{el}</p>
                                )
                            }) : <p className="text-4xl">{props.children}</p>

                        }

                    </div>
                </div>

                <div className="flex flex-col items-center justify-around gap-5 lg:flex-row">
                    {props.linkRepo !== '' ?
                        <ButtonFB ButtonFB color='darkIndigo' href={props.linkRepo}>
                            Repo
                            <GoFileDirectoryFill className="ml-2 size-5" />
                        </ButtonFB>
                        : ''}
                    {props.linkPage !== '' ?
                        <ButtonFB color='darkBlue' href={props.linkPage}>
                            Page
                            < HiMiniPaperAirplane className="ml-2 size-5" />
                        </ButtonFB>
                        : ''}

                </div>

            </Card >
        </div >

    );
}