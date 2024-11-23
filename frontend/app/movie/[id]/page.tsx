import instance from "@/api/axios"
import { convertMovie, EmblaData, Movie } from "@/components/Card/CarouselDot/tsx/EmblaData"
import { FaStar } from "react-icons/fa";

interface Props {

}


const MoviePage = async ({ params }: { params: { id: string } }) => {
    const data : any = await instance.get(`/${params.id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    const newdata : Movie = convertMovie(data)
    return (
        <div className="w-full px-48 bg-black">
            <div className="w-full relative">
                <div className=" block w-full  m-auto">
                    <img src={`https://image.tmdb.org/t/p/original${newdata && newdata.image}`} alt={newdata.image} className="object-cover w-full h-[30rem]"/>
                </div>

                <div className=" absolute -bottom-36 px-10 h-80 w-full flex gap-10">
                    <div className="w-56">
                        <img src={`https://image.tmdb.org/t/p/original${newdata && newdata.poster}`} width={200} alt={newdata.image} className="object-cover h-full "/>
                    </div>
                    <div className="text-white space-y-1 flex-1">
                        <div className="text-5xl font-bold">
                            {newdata.name}
                        </div>
                        <div>
                            {newdata.tagline}
                        </div>
                        <div className="flex gap-10">
                            <div className="flex gap-3">
                                <div>
                                    {shortenDecimal(newdata.vote)}
                                </div>
                                <FaStar  color="white" className="h-5"/>
                            </div>
                            <div>({newdata.voteCount}) votes</div>
                        </div>
                        <div className="">
                            {newdata.time}
                        </div>
                        <div>
                            Release date : {newdata.date}
                        </div>
                        <div className="flex gap-6">
                            {
                                newdata.genres.map((item, index) => {
                                    return (
                                        <div key={index} className=" rounded-2xl border-2 border-white px-2 py-1">
                                            {item.name}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="mt-2">
                            <div className="text-white text-3xl font-bold my-3">
                                OVER VIEW
                            </div>
                            <div className="text-wrap ">
                                {newdata.overView}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black mt-44">
                            asa 
            </div>

        </div>
    )
}

export default MoviePage

function shortenDecimal(input: string): string {
    // Chuyển đổi chuỗi thành số
    const number = parseFloat(input);
    
    // Sử dụng toFixed để giữ 1 chữ số thập phân
    return number.toFixed(1);
}