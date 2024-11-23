export interface EmblaData {
    image: string
    name : string
    date : string
    vote : string
    overView: string
    id : string
    poster : string
}

export const  convertEmbla = (data : any[]) : EmblaData[] => {
    const newdata = data.map((item : any) => {
        return {
            image : item.backdrop_path,
            name : item.original_title,
            date : item.release_date,
            vote : item.vote_average,
            overView : item.overview,
            id : item.id,
            poster : item.poster_path,
        }
    })

    return newdata
}

interface genres {
    id : string,
    name : string,
}

export interface Movie {
    image: string
    name : string
    date : string
    vote : string
    overView: string
    id : string
    voteCount : string
    poster : string
    tagline : string
    time : string
    genres : genres[]
}

export const  convertMovie = (data : any) : Movie=> {
    const newdata = {
        
            image : data.backdrop_path,
            name : data.original_title,
            date : data.release_date,
            vote : data.vote_average,
            overView : data.overview,
            id : data.id,
            voteCount : data.vote_count,
            poster : data.poster_path,
            tagline : data.tagline,
            time : data.time,
            genres : data.genres.map((item : any) => { return {
                id : item.id,
                name : item.name,
            }})

      
    }

    return newdata
}
