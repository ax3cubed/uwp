import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormControl from "@mui/material/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { CustomTextField } from "./CustomTextField";
import SearchModal from "../partials/header/SearchModal";
// Appointment By, Appointment Required
// Product Description
// Temperature
// Special Instruction

export const PickupForm = ({ data, setData }) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [dateTimeOpen, setDateTimeOpen] = useState(false);

  const setOperation = (incoming) => {
    setData({ ...data, companyName: incoming });
  };
  return (
    <React.Fragment>
      <SearchModal
        id="search-modal"
        setSearch={setOperation}
        searchId="search"
        modalOpen={searchModalOpen}
        setModalOpen={setSearchModalOpen}
      />

      <div className="grid grid-cols-2 xxs:grid-cols-1">
        {/* First Column */}
        <div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Shipper Number
            </label>
            <input
              placeholder="Type Here"
              value={data.shipperNumber}
              onChange={(e) =>
                setData({ ...data, shipperNumber: e.target.value })
              }
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="companyName">
              Company Name
            </label>
            <div className="flex flex-row gap-2">
              <input
                value={data.companyName}
                onChange={(e) =>
                  setData({ ...data, companyName: e.target.value })
                }
                placeholder="Type Here"
                className="-mt-2 rounded-lg w-full  placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="companyName"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }}
                className={`
                  ${
                    searchModalOpen && "bg-[#ebe5f7]"
                  }  outline outline-1 w-10  bg-[#F0E7FF] border-[#363F72] active:bg-[#b8a6d1] rounded`}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Contact Full Name
            </label>
            <input
              value={data.contactFullName}
              onChange={(e) =>
                setData({ ...data, contactFullName: e.target.value })
              }
              placeholder="WEST-59"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Address
            </label>
            <input
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              City
            </label>
            <input
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-cols-2 gap-1">
            <div className="grid grid-rows-2">
              <label className="text-[#363F72]" htmlFor="state">
                State
              </label>
              <input
                value={data.state}
                onChange={(e) => setData({ ...data, state: e.target.value })}
                placeholder="Type Here"
                className="-mt-2 rounded-lg w-full placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="state"
              />
            </div>
            <div className="grid grid-rows-2">
              <label className="text-[#363F72]" htmlFor="shipperNumber">
                Zip Code
              </label>
              <input
                placeholder="Type Here"
                value={data.zipCode}
                onChange={(e) => setData({ ...data, zipCode: e.target.value })}
                className="-mt-2 rounded-lg w-full placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="shipperNumber"
              />
            </div>
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Fault
            </label>
            <input
              value={data.fault}
              onChange={(e) => setData({ ...data, fault: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Reason
            </label>
            <input
              value={data.reason}
              onChange={(e) => setData({ ...data, reason: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Pickup
            </label>
            <input
              value={data.pickup}
              onChange={(e) => setData({ ...data, fault: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
        </div>
        {/*Second Column  */}
        <div>
          <div className="flex flex-col mr-4 ml-4">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Hours Of Operation
            </label>
            <input
              value={data.hourOfOperation1}
              onChange={(e) =>
                setData({ ...data, hourOfOperation1: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation1"
            />
            <input
              value={data.hourOfOperation2}
              onChange={(e) =>
                setData({ ...data, hourOfOperation2: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg mt-4 placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation2"
            />
            <input
              value={data.hourOfOperation3}
              onChange={(e) =>
                setData({ ...data, hourOfOperation3: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg mt-4 placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation3"
            />
          </div>

          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Appointment By
            </label>
            <input
              value={data.appointmentBy}
              onChange={(e) =>
                setData({ ...data, appointmentBy: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Appointment Required
            </label>
            <input
              value={data.appointmentRequired}
              onChange={(e) =>
                setData({ ...data, appointmentRequired: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Product Description
            </label>
            <input
              value={data.productDescription}
              onChange={(e) =>
                setData({ ...data, productDescription: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Temperature
            </label>
            <input
              value={data.temperature}
              onChange={(e) =>
                setData({ ...data, temperature: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Special Instruction
            </label>
            <input
              value={data.specialInstruction}
              onChange={(e) =>
                setData({ ...data, specialInstruction: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Pickup Date & Time
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl variant="standard">
                <DesktopDateTimePicker
                  renderInput={(props) => (
                    <CustomTextField
                      fullWidth
                      onClick={() => setDateTimeOpen(true)}
                      {...props}
                    />
                  )}
                  label="Date/Time"
                  open={dateTimeOpen}
                  onClose={() => setDateTimeOpen(false)}
                  value={data.pickupDateTime}
                  onChange={(newValue) => {
                    setData({ ...data, pickupDateTime: newValue });
                  }}
                />
              </FormControl>
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const DeliveryForm = ({ data, setData }) => {
  const [dateTimeOpen, setDateTimeOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const setOperation = (incoming) => {
    setData({ ...data, companyName: incoming });
  };
  return (
    <React.Fragment>
      <SearchModal
        id="search-modal"
        setSearch={setOperation}
        searchId="search"
        modalOpen={searchModalOpen}
        setModalOpen={setSearchModalOpen}
      />
      <div className="grid grid-cols-2 xxs:grid-cols-1">
        {/* First Column */}
        <div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Shipper Number
            </label>
            <input
              placeholder="Type Here"
              value={data.shipperNumber}
              onChange={(e) =>
                setData({ ...data, shipperNumber: e.target.value })
              }
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="companyName">
              Company Name
            </label>
            <div className="flex flex-row gap-2">
              <input
                value={data.companyName}
                onChange={(e) =>
                  setData({ ...data, companyName: e.target.value })
                }
                placeholder="Type Here"
                className="-mt-2 rounded-lg w-full  placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="companyName"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }}
                className={`
                  ${
                    searchModalOpen && "bg-[#ebe5f7]"
                  }  outline outline-1 w-10  bg-[#F0E7FF] border-[#363F72] active:bg-[#b8a6d1] rounded`}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Contact Full Name
            </label>
            <input
              value={data.contactFullName}
              onChange={(e) =>
                setData({ ...data, contactFullName: e.target.value })
              }
              placeholder="WEST-59"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Address
            </label>
            <input
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              City
            </label>
            <input
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-cols-2 gap-1">
            <div className="grid grid-rows-2">
              <label className="text-[#363F72]" htmlFor="state">
                State
              </label>
              <input
                value={data.state}
                onChange={(e) => setData({ ...data, state: e.target.value })}
                placeholder="Type Here"
                className="-mt-2 rounded-lg w-full placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="state"
              />
            </div>
            <div className="grid grid-rows-2">
              <label className="text-[#363F72]" htmlFor="shipperNumber">
                Zip Code
              </label>
              <input
                placeholder="Type Here"
                value={data.zipCode}
                onChange={(e) => setData({ ...data, zipCode: e.target.value })}
                className="-mt-2 rounded-lg w-full placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="shipperNumber"
              />
            </div>
          </div>
        </div>
        {/*Second Column  */}
        <div>
          <div className="flex flex-col mr-4 ml-4">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Hours Of Operation
            </label>
            <input
              value={data.hourOfOperation1}
              onChange={(e) =>
                setData({ ...data, hourOfOperation1: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation1"
            />
            <input
              value={data.hourOfOperation2}
              onChange={(e) =>
                setData({ ...data, hourOfOperation2: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg mt-4 placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation2"
            />
            <input
              value={data.hourOfOperation3}
              onChange={(e) =>
                setData({ ...data, hourOfOperation3: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg mt-4 placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation3"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Delivery Date & Time
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl variant="standard">
                <DesktopDateTimePicker
                  renderInput={(props) => (
                    <CustomTextField
                      fullWidth
                      onClick={() => setDateTimeOpen(true)}
                      {...props}
                    />
                  )}
                  label="Date/Time"
                  open={dateTimeOpen}
                  onClose={() => setDateTimeOpen(false)}
                  value={data.pickupDateTime}
                  onChange={(newValue) => {
                    setData({ ...data, pickupDateTime: newValue });
                  }}
                />
              </FormControl>
            </LocalizationProvider>
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Fault
            </label>
            <input
              value={data.fault}
              onChange={(e) => setData({ ...data, fault: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Reason
            </label>
            <input
              value={data.reason}
              onChange={(e) => setData({ ...data, reason: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Delivery
            </label>
            <input
              value={data.pickup}
              onChange={(e) => setData({ ...data, fault: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const IntermediaryForm = ({ data, setData }) => {
  const [dateTimeOpen, setDateTimeOpen] = useState(false);
  const [departureDateTimeOpen, setDepartureDateTimeOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const setOperation = (incoming) => {
    setData({ ...data, companyName: incoming });
  };

  return (
    <React.Fragment>
      <SearchModal
        id="search-modal"
        setSearch={setOperation}
        searchId="search"
        modalOpen={searchModalOpen}
        setModalOpen={setSearchModalOpen}
      />

      <div className="grid grid-cols-2 xxs:grid-cols-1">
        {/* First Column */}
        <div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Shipper Number
            </label>
            <input
              placeholder="Type Here"
              value={data.shipperNumber}
              onChange={(e) =>
                setData({ ...data, shipperNumber: e.target.value })
              }
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="companyName">
              Company Name
            </label>
            <div className="flex flex-row gap-2">
              <input
                value={data.companyName}
                onChange={(e) =>
                  setData({ ...data, companyName: e.target.value })
                }
                placeholder="Type Here"
                className="-mt-2 rounded-lg w-full  placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="companyName"
              />
                 <button onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }} className={`
                  ${searchModalOpen && "bg-[#ebe5f7]"}  outline outline-1 w-10  bg-[#F0E7FF] border-[#363F72] active:bg-[#b8a6d1] rounded`}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Contact Full Name
            </label>
            <input
              value={data.contactFullName}
              onChange={(e) =>
                setData({ ...data, contactFullName: e.target.value })
              }
              placeholder="WEST-59"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Address
            </label>
            <input
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              City
            </label>
            <input
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-cols-2 gap-1">
            <div className="grid grid-rows-2">
              <label className="text-[#363F72]" htmlFor="state">
                State
              </label>
              <input
                value={data.state}
                onChange={(e) => setData({ ...data, state: e.target.value })}
                placeholder="Type Here"
                className="-mt-2 rounded-lg w-full placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="state"
              />
            </div>
            <div className="grid grid-rows-2">
              <label className="text-[#363F72]" htmlFor="shipperNumber">
                Zip Code
              </label>
              <input
                placeholder="Type Here"
                value={data.zipCode}
                onChange={(e) => setData({ ...data, zipCode: e.target.value })}
                className="-mt-2 rounded-lg w-full placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="shipperNumber"
              />
            </div>
          </div>

          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Arrival Instruction
            </label>
            <input
              value={data.arrivalInstruction}
              onChange={(e) =>
                setData({ ...data, arrivalInstruction: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Departure Instruction
            </label>
            <input
              value={data.departureInstruction}
              onChange={(e) =>
                setData({ ...data, departureInstruction: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>

          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Ref Number
            </label>
            <input
              value={data.refNumber}
              onChange={(e) => setData({ ...data, refNumber: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
        </div>
        {/*Second Column  */}
        <div>
          <div className="flex flex-col mr-4 ml-4">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Hours Of Operation
            </label>
            <input
              value={data.hourOfOperation1}
              onChange={(e) =>
                setData({ ...data, hourOfOperation1: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation1"
            />
            <input
              value={data.hourOfOperation2}
              onChange={(e) =>
                setData({ ...data, hourOfOperation2: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg mt-4 placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation2"
            />
            <input
              value={data.hourOfOperation3}
              onChange={(e) =>
                setData({ ...data, hourOfOperation3: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg mt-4 placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation3"
            />
          </div>

          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Phone
            </label>
            <input
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Fax
            </label>
            <input
              value={data.fax}
              onChange={(e) => setData({ ...data, fax: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Payment Terms
            </label>
            <input
              value={data.paymentTerms}
              onChange={(e) =>
                setData({ ...data, paymentTerms: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Special Instruction
            </label>
            <input
              value={data.specialInstruction}
              onChange={(e) =>
                setData({ ...data, specialInstruction: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>

          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Arrival Date & Time
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl variant="standard">
                <DesktopDateTimePicker
                  renderInput={(props) => (
                    <CustomTextField
                      fullWidth
                      onClick={() => setDateTimeOpen(true)}
                      {...props}
                    />
                  )}
                  label="Date/Time"
                  open={dateTimeOpen}
                  onClose={() => setDateTimeOpen(false)}
                  value={data.arrivalDateTime}
                  onChange={(newValue) => {
                    setData({ ...data, arrivalDateTime: newValue });
                  }}
                />
              </FormControl>
            </LocalizationProvider>
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Departure Date & Time
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl variant="standard">
                <DesktopDateTimePicker
                  renderInput={(props) => (
                    <CustomTextField
                      fullWidth
                      onClick={() => setDepartureDateTimeOpen(true)}
                      {...props}
                    />
                  )}
                  label="Date/Time"
                  open={departureDateTimeOpen}
                  onClose={() => setDepartureDateTimeOpen(false)}
                  value={data.departureDateTime}
                  onChange={(newValue) => {
                    setData({ ...data, departureDateTime: newValue });
                  }}
                />
              </FormControl>
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
