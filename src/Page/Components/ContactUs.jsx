import React, { useState } from "react";
import Navbar from "../common/navBar";
import Footer from "../common/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <Navbar />
      <div className="flex container mx-auto mt-10 ">
        {/* Left Section */}
        <div className="bg-blue-500 items-center justify-center text-white w-full lg:w-5/12 p-8">
          <h3 className="text-sm uppercase font-bold mb-2">Let's Talk</h3>
          <h2 className="text-3xl font-bold mb-4">Speak With Expert Engineers.</h2>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-white" />
              <div>
                <p className="font-semibold">Email:</p>
                <p>support@shiftnpay.com</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faPhone} className="text-white" />
              <div>
                <p className="font-semibold">Phone:</p>
                <p>800 570 1492</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
              <div>
                <p className="font-semibold">Address:</p>
                <p>7920 Belt Line Road, Suite 720, Dallas, TX, 75245</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-8 bg-gray-100">
          <h3 className="text-blue-500 text-sm uppercase font-bold">Get in Touch</h3>
          <h2 className="text-2xl font-bold mb-6">Fill the Form Below</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                className="w-full border rounded py-2 px-4 text-gray-700"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full border rounded py-2 px-4 text-gray-700"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
              <input
                type="text"
                className="w-full border rounded py-2 px-4 text-gray-700"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                Phone Number (Optional)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="text"
                placeholder="Phone Number"
              />
            </div>
          </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Subject</label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
           
        
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full border rounded py-2 px-4 text-gray-700"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Upload Attachment</label>
              <input type="file" onChange={handleFileChange} />
            </div>
            <div className="mb-4">
              <div
                className="g-recaptcha"
                data-sitekey="your-site-key"
              ></div>
            </div>
            <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                How Can We Assist You?
              </label>
              <div>
                <label><input type="checkbox" className="mr-2" /> I have a question about employee timecards.</label><br />
                <label><input type="checkbox" className="mr-2" /> I need help with the Excel timecard template.</label><br />
                <label><input type="checkbox" className="mr-2" /> I’m interested in ShiftNPay’s features.</label><br />
                <label><input type="checkbox" className="mr-2" /> Other (Specify in message).</label>
              </div>
            </div>
          </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-700"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5378.578747271075!2d-122.34927700000001!3d47.620506000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1736428596567!5m2!1sen!2sus"
          className="w-full h-[400px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </div>

      <Footer />
    </div>
  );
}
