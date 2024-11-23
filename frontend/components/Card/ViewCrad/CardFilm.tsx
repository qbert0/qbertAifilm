import Link from "next/link";
import { EmblaData } from "../CarouselDot/tsx/EmblaData"
import { FaStar } from "react-icons/fa";

interface Props {
    move : EmblaData
}

const CardFilm = ({move} : Props) => {

    return (
        <div className=" relative h-[32rem] rounded-xl overflow-hidden border border-slate-50 border-opacity-20 hover:scale-110 hover:z-10 duration-200">
            <Link href={`/movie/${move.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${move && move.poster}`} alt={move.image} className=" object-cover h-full"/>
            <div className="transition-opacity  w-full h-full  duration-200 opacity-0 hover:opacity-100 absolute bottom-0">
                <div className=" absolute bottom-4 mx-4">
                    <div className="text-white font-bold text-3xl mb-10">
                        {move.name}
                    </div>
                    <div className="flex justify-between text-white font-light ">
                        <div>
                            {move.date}
                        </div>
                        <div className="flex items-center gap-1 ">
                            <div>{shortenDecimal(move.vote)}</div>
                            <FaStar  color="white" className="h-5"/>
                        </div>
                    </div>
                    <div className="text-white text-base text-wrap line-clamp-4">
                        {move.overView}
                    </div>
                </div>

            </div>
            </Link>
        </div>
    )
}

export default CardFilm

function shortenDecimal(input: string): string {
    // Chuyển đổi chuỗi thành số
    const number = parseFloat(input);
    
    // Sử dụng toFixed để giữ 1 chữ số thập phân
    return number.toFixed(1);
}
