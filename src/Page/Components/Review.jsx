import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../common/navBar';
import Footer from '../common/footer';
import Lower from '../common/lower';
import review from '../assets/img/352211.png';

const testimonials = [
  {
    name: 'James Pattinson',
    review: 'Lorem ipsum facilisis amet nisi at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultricies.',
    rating: 5,
  },
  {
    name: 'Greg Stuart',
    review: 'Vestibulum, cum nam non amet consectetur morbi aenean condimentum eget. Ultrices integer nunc neque accumsan lorem.',
    rating: 4,
  },
  {
    name: 'Trevor Mitchell',
    review: 'Ut tristique vivamus sed porttitor arcuus. A facilisis metus pretium habitant lorem.',
    rating: 5,
  },
];

const ReviewCard = ({ name, review, rating }) => {
  return (
    <div className='p-6 mr-10 bg-white rounded-lg shadow-lg text-center'>
      <img className='mx-auto rounded-full w-24 h-24' src={`https://i.pravatar.cc/150?u=${name}`} alt={name} />
      <h3 className='text-lg font-semibold mt-4 text-blue-600'>{name}</h3>
      <div className='flex justify-center mt-2'>
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className='text-orange-400'>★</span>
        ))}
      </div>
      <p className='mt-4 text-gray-600'>{review}</p>
    </div>
  );
};

export default function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div>
      <Navbar />
      <div 
        className=' relative bg-cover bg-center py-20' 
        style={{ backgroundImage: `url(${review})` }}
      >
        <div className= 'container mx-auto bg-black bg-opacity-50 py-10 px-4 rounded-lg'>
          <h2 className='text-center text-3xl font-bold mb-6 text-white'>Join millions of happy users</h2>
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <ReviewCard key={index} {...item} />
            ))}
          </Slider>
        </div>
      </div>
      <div className='container mx-auto '>


      <div className=" bg-[#108A00] rounded-md w-full mt-10">
        <div className="flex justify-between p-4 items-center">
          <div className="text-white text-lg">Start saving your quick service time and money</div>
          <div className="bg-white rounded-full">
            <div className="text-green-800 p-2 font-semibold cursor-pointer">Get Started Today</div>
          </div>
        </div>
      </div>
      <Lower />
      </div>
      
      <Footer />
    </div>
  );
}
