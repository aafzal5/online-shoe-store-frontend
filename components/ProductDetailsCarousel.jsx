import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({images}) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map((image)=>(

        <img key={image.id} src={image.attributes.url} alt={image.attributes.name} />

        ))}

        {/* <img src="/p2.png" alt="Product Image" />
        <img src="/p3.png" alt="Product Image" />
        <img src="/p4.png" alt="Product Image" />
        <img src="/p5.png" alt="Product Image" />
        <img src="/p6.png" alt="Product Image" />
        <img src="/p7.png" alt="Product Image" /> */}

      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
