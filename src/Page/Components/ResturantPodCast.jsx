import React from "react";
import Navbar from "../common/navBar";
import Footer from "../common/footer";
import Lower from "../common/lower";
import firstImage from "../assets/img/Groupss.png";
import taxOnes from "../assets/img/Rectangle 22781.png";
import taxTwo from "../assets/img/Rectangle 22782.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CountUp from "react-countup";
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
export default function ResturantPostCast() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      };
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
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-4 gap-10">
          <div>
            <div className="text-[#108A00] text-sm ">
            Restaurant
            Podacst
            </div>
            <div className="text-[45px] font-bold  ">
            You’ll love building schedules in minutes. Your staff will love staying connected via team chat. Your customers will love their positive dining experience.
            </div>
            <div className="text-sm leading-5">
            You’ll love building schedules in minutes. Your staff will love staying connected via team chat. Your customers will love their positive dining experience.
            </div>
            <button className="text-white rounded bg-[#108A00] text-sm p-2 mt-4 ">
              Start Free Trial
            </button>
          </div>
          <div>
            <img src={firstImage} className="" />
          </div>
        </div>
        <div className="text-[#3B3C4E] font-bold p-2 text-[24px] mt-14 text-center">
        Thousands Are Choosing Shiftnpay Time Tracker
        </div>
        <div className="lg:flex p-2 justify-center items-center gap-14 mt-6 ">
          <div>
            <div className="text-[36px] text-[#3B3C4E]">
              <CountUp end={11000000} duration={2} />
            </div>
            <div className="text-[18px] text-[#484A61] font-sans">
              Hours Tracked
            </div>
          </div>
          <div>
            <div className="text-[36px] text-[#3B3C4E]">
              <CountUp end={840000} duration={2} />
            </div>
            <div className="text-[18px]  text-[#484A61] font-sans">
              Tasks Completed
            </div>
          </div>
          <div>
            <div className="text-[36px] text-[#3B3C4E]">
              <CountUp end={51000} duration={2} />
            </div>
            <div className="text-[18px] text-[#484A61] font-sans">
              Productive Users
            </div>
          </div>
          <div>
            <div className="text-[36px] text-[#3B3C4E]">
              <CountUp end={35000} duration={2} />{" "}
            </div>
            <div className="text-[18px] text-[#484A61] font-sans">
              Projects Succeeded
            </div>
          </div>
        </div>

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
       
       
       
       <div className="font-bold text-xl py-10 text-center">
       See for yourself why restaurants love
       </div>
      <div className="grid lg:grid-cols-2 gap-10 grid-cols-1">
        <img className="w-full h-6/12" src={taxOnes}/>
        <img className="w-full h-6/12" src={taxTwo}/>

        

      </div>
        <div className="bg-[#108A00] rounded-md w-full ">
          <div className="flex justify-between p-2 items-center">
            <div className="text-white">
              Start saving your quick service time and money
            </div>
            <div className="bg-white rounded-full">
              <div className="text-green-800 p-2">Get Started Today</div>
            </div>
          </div>
        </div>
        <Lower />
      </div>
      <Footer />
    </div>
  );
}
