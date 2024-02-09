import React, { useState } from "react";
import { currentStops, stopTypes } from "../data/data";
import { areEqual, categorize, classNames } from "../utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@mui/material";
import { CustomDataGrid, CustomPagination } from "../components/CustomDataGrid";
import {
  DeliveryForm,
  IntermediaryForm,
  PickupForm,
} from "../components/Forms";

const ChooseStopTypes = ({ selectedProptype, setSelectedProptype, setData }) => {
  const handleSelect = (types) =>{
    setData({});
    setSelectedProptype(types);

  }

  return (
    <>
      <div className="mb-3 col-auto lg:w-11/12">
        <div className="text-black font-medium mb-3">Choose the stop type</div>
        <div className="mt-0">
          <div className="xxs:-mt-5"></div>
          {stopTypes.map((types) => (
            <div key={types.id} className="flex">
              <button
                onClick={() =>handleSelect(types) }
                className={classNames(
                  selectedProptype.id === types.id
                    ? "text-[#363F72] font-black bg-[#F9F5FFB2]/[0.7] border-[#363F72]"
                    : "font-normal",
                  "w-full h-9 border-2 mb-1 text-sm  text-justify font-inter rounded-lg xxs:w-full xxs:mt-4 xxs:m-1"
                )}
              >
                <span className="ml-5"> {types.name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const FormContainer = ({ selectedProptype, data, setData }) => {
  

  return (
    <React.Fragment>
      <div className="grid grid-rows-2 col-span-2 mr-4">
        <div className="grid grid-rows-1 border-solid border-[#363F72] bg-[#F9F5FF4D]/[0.3] rounded-3xl m-1  border-2 w-full shadow-xl ">
          <div className="m-4 text-[#363F72] font-inter font-black">
            {selectedProptype.name}
          </div>
          <div
            className="mb-7 h-96 overflow-auto  scrollbar-thin scrollbar-thumb-[#76678D] scrollbar-track-[#433a50]
       scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
          >
            <FormFactory
              stopType={selectedProptype}
              data={data}
              setData={setData}
            />
          </div>
        </div>

        <div className="mt-3">
          <button onClick={() => console.log(data)} className="btn w-1/6 xxs:w-full rounded-lg float-right bg-[#363F72] text-center text-white hover:bg-[#272d52]">
            <span className=" block text-xs">Add Stop</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

function FormFactory({ stopType, data, setData }) {
  const compareValue = categorize(stopType.name);
  switch (compareValue) {
    case "pickup":
      return <PickupForm data={data} setData={setData} />;

    case "intermediary":
      return <IntermediaryForm data={data} setData={setData} />;

    case "delivery":
      return <DeliveryForm data={data} setData={setData} />;

    default:
      return <PickUpForm data={data} setData={setData} />;
  }
}
const StopPage = () => {
  const columns = [
    { field: "id", headerName: "", width: 20 },
    { field: "stops", headerName: "Stops", width: 100 },
    { field: "shipper", headerName: "Shipper #", width: 100 },
    { field: "company", headerName: "Company", width: 200 },
    { field: "address", headerName: "Address", width: 300 },
    {
      field: "update",
      editable: false,
      sortable: false,
      filterable: false,
      headerName: "",
      width: 120,
      renderCell: ({ row }) => (
        <>
          <div className="grid gap-1 grid-cols-2">
            <IconButton>
              <FontAwesomeIcon
                className="text-[#363F72]"
                size="xs"
                icon={faEdit}
              ></FontAwesomeIcon>
            </IconButton>
            <IconButton>
              <FontAwesomeIcon
                className="text-[#363F72]"
                size="xs"
                icon={faTrash}
              ></FontAwesomeIcon>
            </IconButton>
          </div>
        </>
      ),
    },
  ];
  const [selectedProptype, setSelectedProptype] = useState(stopTypes[0]);
  const [data, setData] = useState({});
  return (
    <>
      <main className="border-solid border-[#101828] rounded-3xl m-1 border">
        <div className="ml-4">
          <div className="text-[#101828] text-2xl font-bold ml-3 mt-4 font-inter">
            Add a Stop
          </div>
          {/* Content */}
          <div className="lg:px-3 py-0 w-full max-w-9xl mx-auto">
            <div className="grid lg:grid-flow-col lg:auto-cols-fr xxs:grid-cols-1">
              {/* Choose Selected StopType */}
              <ChooseStopTypes
                selectedProptype={selectedProptype}
                setSelectedProptype={setSelectedProptype}
                setData= {setData}
              />
              <FormContainer
                selectedProptype={selectedProptype}
                data={data}
                setData={setData}
              ></FormContainer>
            </div>
            <div className="place-self-center w-11/12 h-72 m-5 xxs:m-0 xxs:ml-3 xxs:mb-8 -mt-96 mb-16">
              <div className="text-black font-semibold mb-3">Current Stops</div>
              <CustomDataGrid
                checkboxSelection
                className="rounded-3xl border-2 h-80"
                rows={currentStops}
                columns={columns}
                components={{ Pagination: CustomPagination }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default StopPage;
