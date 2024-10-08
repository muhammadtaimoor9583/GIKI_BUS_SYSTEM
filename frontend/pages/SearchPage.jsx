import React from 'react'

function SearchPage() {
  return (
    <div
    class="flex w-full h-full flex-col items-center bg-gray-50 px-3 pt-3 md:pb-5"
  >
    <div class="container-sm w-[97%] h-[100%] md:p-5">
      <h1
        class="size-md heading text-center ui w-[97%] leading-[58px] !text-light_blue-900 md:w-full"
      >
        Experience the Ease of Bus Reservation
      </h1>
      <div
        class="flex flex-row flex-wrap justify-between container-sm mt-[86px] md:flex-col"
      >
        <div class="pb-5 md:flex md:justify-center md:items-center">
          <a href="/booking/{{dests.pk}}">
            <div
              class="w-96 h-56 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110"
            >
              <img
                class="relative object-cover w-full h-full rounded-xl"
                src="assets/images/kGkSg1v.png"
              />

              <div class="w-full px-8 absolute top-8">
                <div class="flex justify-between">
                  <div class="">
                    <p class="font-medium tracking-widest">
                      Peshawar
                    </p>
                    <p>to</p>
                    <p class="font-medium tracking-widest">
                      GIKI
                    </p>
                  </div>
                </div>

                <div class="pt-6 pr-6">
                  <div class="flex justify-between">
                    <div class="">
                      <p class="font-light text-xs">Bus Number</p>
                      <p class="font-medium tracking-wider text-sm">
                        20220
                      </p>
                    </div>

                    <div class="">
                      <p class="font-light text-xs">Date</p>
                      <p class="font-medium tracking-wider text-sm">
                        20-07-2024
                      </p>
                    </div>

                    <div class="">
                      <p class="font-light text-xs">Time</p>
                      <p class="font-medium tracking-wider text-sm">
                       18:30
                      </p>
                    </div>
                  </div>
                </div>
                <div class="pt-6 pr-6">
                  <div class="flex justify-between">
                    <div class="">
                      <p class="font-light text-xs">Price</p>
                      <p class="font-medium tracking-wider text-sm">
                        300
                      </p>
                    </div>

                    <div class="">
                      <p class="font-light text-xs">Location</p>
                      <p class="font-medium tracking-wider text-sm">
                       Baagh-e-Naran
                      </p>
                    </div>

                    <div class="">
                      <p class="font-light text-xs">Tickets Left</p>
                      <p class="font-medium tracking-wider text-sm">
                        30
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SearchPage
