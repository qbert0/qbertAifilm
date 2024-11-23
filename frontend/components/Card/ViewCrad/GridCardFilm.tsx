import { EmblaData } from "../CarouselDot/tsx/EmblaData";
import CardFilm from "./CardFilm";

interface Props {
    data : EmblaData[]
}

const GridCardFilm = ({data} : Props) => {

    return (
        <div className="w-full p-2 ">
            <div className="grid grid-cols-6 gap-1.5"> 
                {
                    data.map((item,index) => {
                        return (
                            <CardFilm move={item} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default GridCardFilm