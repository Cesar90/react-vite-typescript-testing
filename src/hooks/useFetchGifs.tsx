import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
    const [images, setImages] = useState<TImage[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const getImages = async() => {
        const newImages = await getGifs(category);
        console.log(newImages);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
