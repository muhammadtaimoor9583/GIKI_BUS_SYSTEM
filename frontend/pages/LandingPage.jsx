import React from 'react'
import Header from '../components/Header'
import { Link,useNavigate } from 'react-router-dom'



function LandingPage() {
  const navigate=useNavigate();
  return (
    
    <div className=' w-full flex items-center flex-col'>
        <Header/>

<div className="relative top-16 w-[97%]">
<div className="hero  min-h-screen ">
  <div className="w-full gap-4 hero-content flex-col lg:flex-row">
    
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold text-blue-900">Find Your Bus Seat With Ease</h1>
      <p className="py-6">
      Book your bus seat hassle-free and enjoy a comfortable journey.
      </p>
      <div className='flex flex-row gap-4'>
      <button className="btn btn-primary bg-blue-800 w-30 h-8" onClick={()=>navigate('/tickets')}>Search</button>
      <button className="btn btn-primary bg-blue-800 w-30 h-8">Learn More</button>
      </div>
    </div>
    <img
      src="assets/images/93335033.cms"
      className="max-w-sm rounded-lg shadow-2xl w-1/2" />
  </div>
</div>

  </div>


<div className=" relative w-[97%] bg-gray-100">
  <img
  src='assets/images/bus-banner.jpg'
  className="w-full rounded"

  />
  <div className='absolute left-10 bottom-10 w-[40%]'>
    <h1 className="text-4xl font-bold text-blue-900">Experience the Ease of Bus Reservation</h1>
    <p className="py-6">
    Rah-e-safar offers a convenient, safe, and affordable way for students to book their bus seats. With just a few clicks, you can reserve your seat and avoid the hassle of waiting in long queues.
    </p>
    <div className='flex flex-row gap-4'>
    <button className="btn border-black bg-transparent hover:bg-blue-900 text-black hover:text-white py-2 px-4 border rounded">Learn More</button>
    <button className="btn border-transparent bg-transparent hover:bg-blue-900 text-black hover:text-white py-2 px-4 border rounded">Sign up</button>
    </div>
  </div>

  </div>


  <div className='grid grid-cols-3 gap-3 w-[97%] mt-20'>
    <div className='card flex flex-col gap-4 justify-center items-center'>
      <img
      src='assets/images/img_rectangle_5.png'
      className='rounded h-80 w-80'
      />
      <div className='flex flex-col gap-2 justify-center items-center'>
        <h1 className='text-xl text-blue-500 text-wrap text-center'>Step1:Choose your Destination</h1>
        <p className='text-center'>Select your desired destination from our wide range of available routes.</p>
      </div>



    </div>
    <div className='card flex flex-col gap-4 justify-center items-center'>
      <img
      src='assets/images/img_rectangle_3.png'
      className='rounded h-80 w-80'
      />
      <div className='flex flex-col gap-2 justify-center items-center'>
        <h1 className='text-xl text-blue-500 text-wrap text-center'>Step 2: Select Your Bus</h1>
        <p className='text-center'>Select from different buses</p>
      </div>



    </div>
    <div className='card flex flex-col gap-4 justify-center items-center'>
      <img
      src='assets/images/img_rectangle_4.png'
      className='rounded h-80 w-80'
      />
      <div className='flex flex-col gap-2 justify-center items-center'>
        <h1 className='text-xl text-blue-500 text-wrap text-center'>Step 3: Reserve your seat</h1>
        <p className='text-center'>Secure your bus seat by completing the reservation process</p>
      </div>



    </div>
  </div>


  {/* Feedback Section */}
  <div
        class="mt-[86px] flex w-[97%] flex-col items-start"
      >
        <h6 class="text-4xl text-blue-900 text-bold">
          What Students Say
        </h6>
        <p class="size-xs text ui mt-2.5">
          Read testimonials from students who have used our service
        </p>
        <div class="grid grid-cols-3 gap-4">
          <div
            class="flex w-full rounded-[30px] border border-solid border-black-900_01 px-[25px] pb-11 pt-[27px]  sm:p-5"
          >
            <div class="flex w-[68%] flex-col gap-[31px] ">
              <div>
                <ul class="ratingbar ui flex text-3xl">
                  <li>★</li>
                  <li>★</li>
                  <li>★</li>
                  <li>★</li>
                  <li>★</li>
                </ul>
              </div>
              <p class="size-xs text ui">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div
                class="flex w-[75%] items-center  gap-5 "
              >
                <div
                  class="h-[50px] w-[50px] rounded-[25px] bg-gray-500"
                ></div>
                <div class="flex flex-col items-start">
                  <h6 class="size-xs heading ui">Junaid Saleem</h6>
                  <p class="size-xs text ui">Student</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex w-full rounded-[30px] border border-solid border-black-900_01 px-[25px] pb-11 pt-[27px]  sm:p-5"
          >
            <div class="flex w-[68%] flex-col gap-[31px] ">
              <div>
                <ul class="ratingbar ui flex text-3xl">
                  <li>★</li>
                  <li>★</li>
                  <li>★</li>
                  <li>★</li>
                  <li>★</li>
                </ul>
              </div>

              <p class="size-xs text ui">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div
                class="flex w-[75%] items-center  gap-5 "
              >
                <div
                  class="h-[50px] w-[50px] rounded-[25px] bg-gray-500"
                ></div>
                <div class="flex flex-col items-start">
                  <h6 class="size-xs heading ui">Junaid Saleem</h6>
                  <p class="size-xs text ui">Student</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex w-full rounded-[30px] border border-solid border-black-900_01 px-[25px] pb-11 pt-[27px]  sm:p-5"
          >
            <div class="flex w-[68%] flex-col gap-[31px] ">
              <div>
                <ul class="ratingbar ui flex text-3xl">
                  <li>★</li>
                  <li>★</li>
                  <li>★</li>
                  <li>★</li>
                  <li>★</li>
                </ul>
              </div>
              <p class="size-xs text ui">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div
                class="flex w-[75%] items-center  gap-5 "
              >
                <div
                  class="h-[50px] w-[50px] rounded-[25px] bg-gray-500"
                ></div>
                <div class="flex flex-col items-start">
                  <h6 class="size-xs heading ui">Junaid Saleem</h6>
                  <p class="size-xs text ui">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div
        class="w-[97%] mt-[120px] flex flex-col items-start "
      >
        <div class="flex flex-col items-start self-stretch">
          <h1 class="text-4xl text-blue-900">
            Frequently Asked Questions
          </h1>

          <div
            class="mt-[18px] flex flex-col items-start self-stretch "
          >
            <p class="text-sm m-0 p-0">
              Find answers to common questions about the bus reservation
              process, schedules, and policies.
            </p>

            <div class="h-[0.5px] w-[100%] bg-gray-700"></div>

            <div
              class="mt-[25px] mb-[25px] flex w-[97%] items-start justify-between gap-5"
            >
              <h6 class="size-xs heading ui mt-1.5 font-bold">How to book a seat?</h6>
              <p class="size-xs text ui w-[65%]">
                To book a seat, simply visit our website, select your desired
                bus route and date, choose an available seat, and proceed to
                payment.
              </p>
            </div>

            <div class="h-[0.5px] w-[100%] bg-gray-700"></div>

            <div
              class="mt-[25px] mb-[25px] flex w-[97%] items-start justify-between gap-5 "
            >
              <h6 class="size-xs heading ui mt-1.5 font-bold">
                What are the bus schedules?
              </h6>
              <p class="size-xs text ui w-[65%] ">
                Bus schedules vary depending on the route. You can check the
                available schedules on our website.
              </p>
            </div>

            <div class="h-[0.5px] w-[100%] bg-gray-700"></div>

            <div
              class="mt-[25px] mb-[25px] flex w-[97%] items-start justify-between gap-5"
            >
              <h6 class="size-xs heading ui mt-1.5 font-bold">
                How can I modify my booking?
              </h6>
              <p class="size-xs text ui w-[65%]">
                To modify your booking, please contact our customer support team
                at least 48 hours before the scheduled departure time.
              </p>
            </div>

            <div class="h-[0.5px] w-[100%] bg-gray-700"></div>
          </div>
        </div>

        <div class="container-sm">
          <h1 class="text-xl heading ui mt-[129px] text-blue-900">
            Still have questions?
          </h1>
          <p class="size-xs text ui mt-[18px]">
            Contact Us for further assistance.
          </p>
          <button
            class="text-black bg-white mt-5 hover:bg-blue-800 hover:text-white px-10 py-5 border-2 border-black rounded"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div
        class="container-sm w-[97%] flex flex-col gap-36  sm:gap-[72px] mt-[131px]"
      >
        <div
          class="flex flex-col items-start  "
        >
          <p class="size-xs text ui">Reliable</p>
          <h2 class="size-lg heading ui mt-[11px] !text-light_blue-900">
            Meet Our Team
          </h2>

          <div
            class="ml-[7px] mt-[63px] flex justify-center gap-[79px] self-stretch  mb-10 "
          >
            <div
              class="flex w-[19%] flex-col items-start  "
            >
              <img
                src="assets/images/Junaid.jpeg"
                alt="11053969 x logo"
                class="h-[100px] w-[100px] border rounded-[100px]  "
              />
              <h3 class="size-xs heading ui mt-[27px] font-bold">Junaid Saleem</h3>
              <p class="size-xs text ui">Backend Engineer</p>
              <p class="size-xs text ui mt-3">
                CS @ GIKI'26
              </p>

              
              <div
                class="mt-[21px] flex w-[70%] items-center justify-between gap-5  "
              >
                <img
                  src="assets/images/104493_linkedin_icon.svg"
                  alt="104493 linkedin icon"
                  class="h-[30px] w-[30px]"
                />

                <img
                  src="assets/images/img_11053969_x_logo.svg"
                  alt="11053969 x logo"
                  class="h-[25px] w-[25px] mt-[2px]"
                />
                <img
                  src="assets/images/img_211904_social_github_icon.svg"
                  alt="211904 social github icon"
                  class="h-[30px] w-[30px]"
                />
              </div>
            </div>

            <div
              class="flex w-[19%] flex-col items-start "
            >
              <img
                src="assets/images/muneeb.jpg"
                alt="11053969 x logo"
                class="h-[100px] w-[100px] border rounded-[100px]  "
              />
              <h3 class="size-xs heading ui mt-[27px] font-bold">Muneeb Bin Nasir</h3>
              <p class="size-xs text ui">UI/UX Designer</p>
              <p class="size-xs text ui mt-3">
                CS @ GIKI'26
              </p>

              
              <div
                class="mt-[21px] flex w-[70%] items-center justify-between gap-5  "
              >
                <img
                  src="assets/images/104493_linkedin_icon.svg"
                  alt="104493 linkedin icon"
                  class="h-[30px] w-[30px]"
                />

                <img
                  src="assets/images/img_11053969_x_logo.svg"
                  alt="11053969 x logo"
                  class="h-[25px] w-[25px] mt-[2px]"
                />
                <img
                  src="assets/images/img_211904_social_github_icon.svg"
                  alt="211904 social github icon"
                  class="h-[30px] w-[30px]"
                />
              </div>
            </div>

            <div
              class="flex w-[19%] flex-col items-start    "
            >
              <img
                src="assets/images/hamza.jpeg"
                alt="11053969 x logo"
                class="h-[100px] w-[100px] border rounded-[100px]  "
              />
              <h3 class="size-xs heading ui mt-[27px] font-bold">Hamza Faraz</h3>
              <p class="size-xs text ui">Front-End Developer</p>
              <p class="size-xs text ui mt-3">
                CS @ GIKI'26
              </p>

              
              <div
                class="mt-[21px] flex w-[70%] items-center justify-between gap-5  "
              >
                <img
                  src="assets/images/104493_linkedin_icon.svg"
                  alt="104493 linkedin icon"
                  class="h-[30px] w-[30px]"
                />

                <img
                  src="assets/images/img_11053969_x_logo.svg"
                  alt="11053969 x logo"
                  class="h-[25px] w-[25px] mt-[2px]"
                />
                <img
                  src="assets/images/img_211904_social_github_icon.svg"
                  alt="211904 social github icon"
                  class="h-[30px] w-[30px]"
                />
              </div>
            </div>
            <div
            class="flex w-[19%] flex-col items-start  "
          >
            <img
              src="assets/images/taimoor.jpeg"
              alt="11053969 x logo"
              class="h-[100px] w-[100px] border rounded-[100px]  "
            />
            <h3 class="size-xs heading ui mt-[27px] font-bold">Muhammad Taimoor</h3>
            <p class="size-xs text ui">Database Architect</p>
            <p class="size-xs text ui mt-3">
              CS @ GIKI'26
            </p>

            <div
              class="mt-[21px] flex w-[70%] items-center justify-between gap-5  "
            >
              <img
                src="assets/images/104493_linkedin_icon.svg"
                alt="104493 linkedin icon"
                class="h-[30px] w-[30px]"
              />

              <img
                src="assets/images/img_11053969_x_logo.svg"
                alt="11053969 x logo"
                class="h-[25px] w-[25px] mt-[2px]"
              />
              <img
                src="assets/images/img_211904_social_github_icon.svg"
                alt="211904 social github icon"
                class="h-[30px] w-[30px]"
              />
            </div>
          </div>
        </div>

          
      <footer class="container-sm mt-7 w-[97%] py-5 ">
        <div class="flex flex-col gap-3.5">
          <div class="h-[0.5px] bg-gray-700"></div>

          <div class="flex justify-between">
            <div>
              <p class="size-xs text-gray-800 ui">
                © 2024 Rah-e-safar. All Rights Reserved.
              </p>
            </div>

            <div class="flex justify-between">
              <a href="#" class="ml-[26px] self-end">
                <p class="size-xs ui text-gray-800">Privacy Policy</p>
              </a>

              <a href="#" class="ml-[26px] self-start">
                <p class="size-xs ui text-gray-800">Terms and Conditions</p>
              </a>
              <a href="#" class="ml-[26px] self-end">
                <p class="size-xs ui text-gray-800">Cookie Policy</p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  
  </div>
  )
}
 
export default LandingPage
