import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as CarouselContainer } from 'react-responsive-carousel'
import Image from 'next/image'

export default function Carousel({ images }) {
  return (
    <CarouselContainer showThumbs={false}>
      {images.map((img) => (
        <div key={img.alt}>
          <Image 
            src={img.path} 
            width={img.width} 
            height={img.height} 
            alt={img.alt} />
        </div>
      ))}
    </ CarouselContainer >
  )
}