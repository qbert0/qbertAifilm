import instance from "@/api/axios";
import Embla from "@/components/Card/CarouselDot/tsx";
import { convertEmbla } from "@/components/Card/CarouselDot/tsx/EmblaData";
import GridCardFilm from "@/components/Card/ViewCrad/GridCardFilm";
import Image from "next/image";

const Home = async () => {
  const data : any  = await instance.get('/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
  // console.log(data)
  const newdata = convertEmbla(data.results)
  return (
    <div className="w-full">
      <Embla Embla={newdata}/>
      <div className="text-white text-5xl font-bold mt-32 mb-20 mx-20">
          POPULAR
      </div>
      <div className="w-full px-40 my-10">
        
        <GridCardFilm data={newdata} />
      </div>
      
    </div>
  );
}

export default Home
