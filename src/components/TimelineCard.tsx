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

const TimelineCard: React.FC<TimelineCardProps> = ({ title, subtitle, description, images }) => {
  const settings = {
    dots: true,
    infinite: images.length > 1, // Disable infinite scrolling if there is only one image
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col w-full">
      <div className="bg-gray-50 shadow-xl rounded-lg p-8 flex flex-col items-center transition-all duration-500">

        {/* Title */}
        <h3 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">{title}</h3>

        {/* Image Carousel */}
        {images && images.length > 0 && (
          <div className="w-full mb-6">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="text-center">
                  <img
                    src={image}
                    alt={`${title} image ${index + 1}`}
                    className="rounded-lg shadow-md object-cover h-60 w-full cursor-pointer transition-transform transform hover:scale-105"
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* Subtitle */}
        <p className="text-lg font-semibold text-gray-600 mb-4 text-center">{subtitle}</p>

        {/* Description */}
        <p className="text-gray-700 text-md leading-relaxed text-left whitespace-pre-line">
          {description}
        </p>

      </div>
    </div>
  );
};

export default TimelineCard;
