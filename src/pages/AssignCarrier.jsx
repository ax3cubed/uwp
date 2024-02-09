import React, { useState } from "react";

import { generateKey } from "../utils/Utils";
import TransferList from "../components/TransferList";
import "../css/additional-styles/style.scss";
import { CustomDataGrid, CustomPagination } from "../components/CustomDataGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faEdit,
faTrash
} from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@mui/material";
import { carriers, rows } from "../data/data";


const Carrier = () => {
  return (
    <div className="mb-7">
      <div className="text-black font-semibold">Carrier</div>
      <div className="mt-11">
        <div className="xxs:-mt-5"></div>
        <label
          for="carriers"
          className="block mb-1 text-[#363F72] font-bold text-xs"
        >
          Select from Carriers for the Deal
        </label>
        <select
          id="countries"
          className="mb-6 bg-gray-50 border xxs:w-full  border-gray-300 text-[#363F7299] text-opacity-75 text-xs  rounded-xl
                    focus:ring-gray-800 focus:border-gray-800 block w-10/12 p-2.5 "
        >
          <option selected={true}>Please Select One</option>
          {carriers.map((carrier, index) => (
            <option key={generateKey(index)}>{carrier}</option>
          ))}
        </select>
        <button className="btn w-7/12 xxs:w-full rounded-lg bg-[#363F72] text-center text-white hover:bg-[#272d52]">
          <span className=" block text-xs">Add/Update</span>
        </button>
      </div>
    </div>
  );
};
const CarrierTransferList = ({ data }) => {
  return (
    <div className="mb-7">
      <div className="grid grid-cols-3 ">
        <div className="text-black font-semibold">Available Stops</div>
        <div></div>
        <div className="text-black font-semibold -ml-10">Selected Stops</div>
      </div>
      <TransferList props={data} />
    </div>
  );
};

const AssignCarrier = () => {
  const [data, setData] = useState({
    list1: [],
    list2: [],
  });
  const columns = [
    { field: "no", headerName: "No", width: 50 },
    { field: "carrier", headerName: "Carrier", width: 200 },
    { field: "shops", headerName: "Shops", width: 550 },
    {
      field: "update",
      editable:false,
      sortable:false,
      filterable:false,
      headerName: "Update",
      width: 120,
      renderCell: ({ row }) => (
        <>
        <div className="grid gap-1 grid-cols-2">
          <IconButton>
          <FontAwesomeIcon className="text-[#363F72]" size="xs" icon={faEdit}></FontAwesomeIcon>
          </IconButton>
          <IconButton>
          <FontAwesomeIcon  className="text-[#363F72]" size="xs" icon={faTrash}></FontAwesomeIcon>
          </IconButton>
         
        </div>
        </>
      ),
    },
  ];
 
  return (
    <>
      <main className="border-solid border-[#101828] rounded-3xl m-1 border">
        <div className="text-[#101828] text-2xl font-bold m-3">
          Assign a Carrier
        </div>

        <div className="px-4  lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Dashboard actions */}
          <div className="grid gap-4 grid-cols-2 xxs:grid-cols-1">
            {/* Carrier */}
            <Carrier />

            {/* Available Shops */}
            <CarrierTransferList data={data} />
          </div>
        </div>
        {/* Table Component */}
        
        <div className="place-self-center w-11/12 h-72 m-10 -mt-10 xxs:m-0 xxs:ml-3 xxs:mb-8">
        <div className="text-black font-semibold mb-3">Current Stops</div>
        
          <CustomDataGrid
            checkboxSelection
            className="rounded-3xl border-2"
            rows={rows}
            columns={columns}
            components={{ Pagination: CustomPagination }}
          />
        </div>
      </main>
      {/* Content area */}
    </>
  );
};

export default AssignCarrier;
