import { FC  } from "react"
import { GitItem } from "./GitItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

interface IProps{
    category: string
}

export const GifGrid:FC<IProps> = ({category}) => {
    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h3>
                {category}
            </h3>
            {
                isLoading && (<h2>Loading...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => {
                        return <GitItem key={image.id} {
                            ...image
                        } />
                    })
                }
            </div>
        </>
    )
}
