import  { useEffect, useState } from "react"

export const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"

export function useImageLoaded(initImageUrl: string) {
    const [currentImage, setCurrentImage] = useState(initImageUrl)
    useEffect(() => {
        function testImage() {
            const imageDOM = new Image();
            imageDOM.onerror = () => {
                setCurrentImage(defaultImage)
            }
            imageDOM.src = initImageUrl
        }
        testImage()
    }, [])
    return [currentImage]
}