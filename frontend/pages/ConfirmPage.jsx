import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";

import PrintPage from "./PrintPage";
import { useParams } from "react-router-dom";

function ConfirmPage() {
  const { id: busId } = useParams();

  const handleClick = async (e) => {
    e.preventDefault();
    const element = document.getElementById("print-page");
    const canvas = await html2canvas(element);

    // Append the canvas to the document for debugging
    document.body.appendChild(canvas);

    const data = canvas.toDataURL("image/png");
    console.log("Data URL length:", data.length); // Check if data URL has content

    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.width;
    const pdfHeight = pdf.internal.pageSize.height;
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("ticket.pdf");
  };
  return (
    <div class="flex flex-col min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50">
      <div class="relative">
        <div class="relative flex flex-col sm:w-[30rem] rounded-lg border border-gray-400 bg-white shadow-lg px-4">
          <div class="flex justify-center">
            <img
              src="/assets/images/img_group_29.svg"
              alt="group 29"
              class="h-[100px] w-[37%]"
            />
          </div>

          <div class="flex justify-center">
            <img
              src="assets/images/success_7518748.png"
              alt=""
              class="h-[150px] pb-10"
            />
          </div>

          <button class="grid w-full mb-3 cursor-pointer select-none rounded-md border border-blue-900 bg-blue-900 py-2 px-5 text-center align-middle text-sm text-white-A700 shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none">
            <a
              href="#"
              target="_blank"
              class="btn btn-success"
              onClick={handleClick}
            >
              Generate Ticket
            </a>{" "}
          </button>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <PrintPage busId={busId} />
      </div>
    </div>
  );
}

export default ConfirmPage;
