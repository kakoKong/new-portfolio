import React from 'react';
import Slider from 'react-slick'; // Import react-slick for carousel

// CSS for react-slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TimelineCardProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[]; // Array of image URLs
  reverse?: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ title, subtitle, description, images, reverse }) => {
  const cardOrder = reverse ? 'order-1' : 'order-2';
  const contentOrder = reverse ? 'order-2' : 'order-1';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col w-full"> {/* Increased the width for larger cards */}
      <div className={`bg-white shadow-lg p-10 rounded-lg flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center`}>
        <div className={`w-full ${contentOrder}`}>
          <h3 className="text-2xl font-bold mb-4">{title}</h3> {/* Larger title */}

          <span className="block font-semibold text-sm mb-2">{subtitle}</span>
          <p className="text-gray-700 text-md">{description}</p> {/* Larger description */}
        </div>

        {/* Image Carousel */}
        {images && (
          <div className={`w-2/5 ${cardOrder} ml-6`}> {/* Larger space for images */}
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`${title} image ${index + 1}`} className="rounded-lg cursor-pointer" />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineCard;
