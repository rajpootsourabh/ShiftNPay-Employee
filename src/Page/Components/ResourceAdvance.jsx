import React from "react";
import Navbar from "../common/navBar";
import Footer from "../common/footer";
import Lower from "../common/lower";
import videoPlaceholder from "../assets/img/LoginOne.png";
import ImageVideo from "../assets/img/video.png";
export default function ResourceAdvance() {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 py-10 flex-grow">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center mb-10">Resources</h1>

        {/* Sidebar & Content */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-1/4 w-full mb-10 md:mb-0">
            <div className="space-y-4">
              <button className="w-full py-3 px-4 bg-gray-100 text-left rounded-lg">
                ShiftPay Basics
              </button>
              <button className="w-full py-3 px-4 bg-green-700 text-white text-left rounded-lg">
                ShiftPay Advanced
              </button>
              <button className="w-full py-3 px-4 bg-gray-100 text-left rounded-lg">
                Use Cases
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4 w-full">
            {/* Video Section */}
            <div className="text-left mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                How to manage projects in ShiftnPay
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A project is “a piece of planned work or an activity which is
                done over a period of time and intended to achieve a particular
                purpose”. 
                <p>
                  Whatever the type, each project will impose a certain budget
                  and a deadline on your team. And how well you manage project
                  deadlines and budgets will majorly impact project success.
                </p>
                <p>
                  Besides, you also have to effectively manage task distribution
                  between the team, so everyone knows exactly what they’re
                  doing.
                </p>
                <p>
                  Plus, add to that the constant communication and collaboration
                  happening between your team members during the project.
                </p>
                <p>
                  What if you had everything in one place to help the whole team
                  manage projects successfully?
                </p>
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sed ac tellus in orci efficitur euismod. Phasellus mollis neque
                sit amet odio varius feugiat. Vivamus efficitur, orci nec
                fringilla vestibulum, ex purus gravida metus, at placerat elit
                nulla id eros. Nullam auctor vel erat vel ullamcorper.
                Pellentesque sed fringilla magna.
              </p>

              <img
                src={ImageVideo}
                alt="Video Placeholder"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Overview Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">
                How to manage projects in ShiftnPay
              </h2>
              <h3 className="text-xl font-medium mb-4">
                1. Create a project and assign a client
              </h3>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When your team is starting a new project, the first thing you
                should do is to create it in your base. And if that project
                brings in a new client too, you would need to add a new client
                first. Then, the work you do on the project is traceable to the
                client you will later bill for your services.
              </p>
              <h3 className="text-xl font-medium mb-4">
                2. Set estimates and reminders
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As each project has a deadline and a limited budget at your
                disposal, it’s good to keep everyone reminded of this crucial
                part of successful project completion.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In Shiftnpay, you can set time and budget estimates for each
                project or task you’re working on.
              </p>
              <h3 className="text-xl font-medium mb-4">
                Based on these estimates, you will be able to later visually
                track progress.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                You can also set reminders whenever a project reaches a certain
                percentage of an estimate.
              </p>
              <h3 className="text-xl font-medium mb-4">
                3. Set estimates and reminders
              </h3>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A common way to deal with a project is to split it into smaller
                portions so each team or team member knows exactly what they
                need to do.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                If a task is done, click on the three dots and mark them as
                done.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In this you can add as many tasks your team needs – specific or
                general ones. 
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For each task, you can set a billable hourly rate (to see the
                earnings that task brings) and cost rate (to see the cost
                working on that task generates).
              </p>
            </div>
            <h3 className="text-xl font-medium mb-4">
              4. Organize & add team members
            </h3>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Managing human resources is one of the most important parts of
              managing projects. You need to know the labor cost and profit
              generated while working on a project.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Check whether you have enough human resources in the team to
              complete the project and if you decide to add new people, just add
              their email addresses and assign them an adequate team role.
            </p>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-green-700 text-white rounded-lg px-6 py-2 flex justify-between items-center mt-10">
          <span className="text-xl">
            Start saving your quick service time and money
          </span>
          <button className="bg-white text-green-800 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-100">
            Get Started Today
          </button>
        </div>

        <Lower />
      </div>

      <Footer />
    </div>
  );
}
