import Carousel from 'react-bootstrap/Carousel';


function Banner() {
  return (
    <Carousel className='mt-14'>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img style={{width: '100%', height:'1280'}} src="../../public/banner1.webp" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img style={{width: '100%', height:'1280'}} src="../../public/banner2.webp" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img style={{width: '100%', height:'1280'}} src="../../public/banner3.webp" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;