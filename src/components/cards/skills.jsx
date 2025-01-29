export const SkillCard = (props) => {
    return (
        <div className="max-w-[750px]">
            <div className="flex flex-wrap bg-gray-100 dark:bg-[rgba(0,0,0,0.4)] justify-center gap-6 p-6 rounded-xl border-4 border-white text-7xl" >
                {
                    props.children.map((chil, i) => {                        
                        return (
                            <div key={i} className="flex flex-col items-center gap-1 text-gray-800 dark:text-white w-[150px]">
                                {chil}
                                <p className="text-2xl text-blue-800 text-center dark:text-cyan-300">{chil.props.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}