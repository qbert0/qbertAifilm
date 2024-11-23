import instance from "@/api/axios"
import { convertEmbla, EmblaData } from "@/components/Card/CarouselDot/tsx/EmblaData"
import GridCardFilm from "@/components/Card/ViewCrad/GridCardFilm"

interface Props {

}

const UpComing = async () => {
    const data : any = await instance.get("/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    const newdata : EmblaData[] = convertEmbla(data.results)
    return (
        <div className="w-full">
        <div className="text-white text-5xl font-bold mt-32 mb-20 mx-20">
            UPCOMING
        </div>
        <div className="w-full px-40 my-10">
            
            <GridCardFilm data={newdata} />
        </div>
        </div>
    )
}

export default UpComing