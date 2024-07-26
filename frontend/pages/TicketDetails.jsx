import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {CiTrash} from 'react-icons/ci'

import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import { formatPostDate, getFormatedDate, getFormatedTime } from "../utils/GetDate.js";


function TicketDetails({ticket}) {
  
  const bookingTime = formatPostDate(ticket?.createdAt);
  const { data: authUser,isLoading } = useQuery({ queryKey: ["authUser"] });


const closeModal = () => {
    document.getElementById('ticket_details').close();
};

const handleOutsideClick = (e) => {
    const dialog = document.getElementById('ticket_details');
    if (e.target === dialog) {
        closeModal();
    }
};



const date=getFormatedDate(ticket?.bus?.busDate);
const time=getFormatedTime(ticket?.bus?.busDate);

  if(isLoading){
    return <LoadingSpinner/>
  }
  return (
    <div key={ticket?._id}>
      <div class=" w-full flex flex-col items-center overflow-hidden text-sm">
        <div
          class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150 overflow-hidden"
          onClick={() => document.getElementById("ticket_details").showModal()}
        >
          

          <div className="flex justify-between w-full items-center">
          <div>
          <img
            src="/assets/images/taimoor.jpeg"
            alt=""
            class="rounded-full h-6 shadow-md inline-block mr-2"
          />
            <span>{`${ticket?.bus?.from} to ${ticket?.bus?.to}`} </span>
          </div>

            <div className="flex flex-row-reverse">
            <span class="text-gray-500 text-xs p-2">{bookingTime}</span>
            </div>
          </div>
        </div>
      </div>


      <dialog id="ticket_details" className="modal" onClick={handleOutsideClick}>
        <div class="modal-box  flex flex-col min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50">
            <button
              className="absolute top-2 right-2 bg-blue-700 hover:bg-blue-800 rounded-xl p-2"
              onClick={closeModal}
            >X       </button>
          <div class="relative">
            <div class="relative flex flex-col sm:w-[30rem] rounded-lg border border-gray-400 bg-white shadow-lg px-4">
              <div class="flex-auto justify-start p-6">
                <div class="flex justify-center">
                  <img
                    src="/assets/images/img_group_29.svg"
                    alt="group 29"
                    class="h-[100px] w-[37%] pb-10"
                  />
                </div>
                <div class="flex justify-center">
                  <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">
                    Confirm Your Ticket!
                  </h4>
                </div>

                <p class="mb-4 font-semibold mt-4 text-gray-500">{}</p>

                <div class="flex items-center justify-between sm:block">
                  <div class="mb-4">
                    <p class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900">
                      From: <spac class="text-gray-700">{ticket.bus?.from}</spac>
                    </p>
                  </div>

                  <div class="mb-4">
                    <p class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900">
                      To: <spac class="text-gray-700">{ticket.bus?.to}</spac>
                    </p>
                  </div>
                </div>

                <div class="mb-4">
                  <p class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900">
                    Bus Number:{" "}
                    <spac class="text-gray-700">{ticket.bus?.busNumber}</spac>
                  </p>
                </div>

                <div class="mb-4">
                  <p class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900">
                    Location: <spac class="text-gray-700">{ticket.bus?.location}</spac>
                  </p>
                </div>

                <div class="mb-4">
                  <p class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900">
                    Date: <spac class="text-gray-700">{date}</spac>
                  </p>
                </div>
                <div class="mb-4">
                  <p class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900">
                    Time: <spac class="text-gray-700">{time}</spac>
                  </p>
                </div>

                <div class="mb-4">
                  <p class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900">
                    Name:{" "}
                    <spac class="text-gray-700">
                      {authUser?.firstName + " " + authUser?.lastName}
                    </spac>
                  </p>
                </div>

                <div class="mb-4">
                  <p class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900">
                    Registration Number:{" "}
                    <spac class="text-gray-700">{authUser?.username}</spac>
                  </p>
                </div>
                <div class="mb-4">
                  <p class="mb-2 mr-2 inline-block text-xs font-medium text-black-900">
                    Email: <spac class="text-gray-700">{authUser?.email}</spac>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default TicketDetails;
