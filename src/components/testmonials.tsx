'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Ahmed Khan',
      image: '/2.jpg',
      text: 'Nishat has been phenomenal in delivering high-quality embroidery designs. Highly recommended!',
    },
    {
      name: 'Hassan Malik',
      image: '/1.jpg',
      text: 'Working with Nishat was a game-changer for our clothing brand.',
    },
    {
      name: 'Bilal Siddiqui',
      image: '/3.jpg',
      text: 'Their digitization quality is outstanding. Best in the business!',
    },
    {
      name: 'Zain Abbas',
      image: '/6.jpg',
      text: 'Quick fixes and amazing support. Loved working with Nishat!',
    },
    {
      name: 'Ayesha Noor',
      image: '/5.jpg',
      text: 'Fast service, excellent customer support, and premium quality.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl uppercase text-gray-600">Testimonials</h3>
          <h4 className="text-3xl md:text-4xl font-bold mt-2">
            Customer’s Awesome <span className="text-gray-600">Feedback</span>
          </h4>
        </div>

        <Slider {...settings}>
          {testimonialsData.map((t, i) => (
            <div key={i} className="px-4">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={120}
                  height={120}
                  className="mx-auto rounded-full object-cover"
                />
                <h5 className="mt-4 font-semibold">{t.name}</h5>
                <p className="text-gray-600 mt-3 text-sm">“{t.text}”</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
