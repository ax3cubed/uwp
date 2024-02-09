import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IconButton, Button, Checkbox } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortUp,
  faSortDown,
  faAngleLeft,
  faAnglesRight,
  faAngleRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
import { classNames } from "../utils/Utils";
//initial value set for Arrow
const upArrow = -1;
const downArrow = 1;


const TransferList = ({ props }) => {
  //calling props
  const [propsVal, setStatePropsFun] = useState(props);
  //setting states with callings props and updating new values
  useEffect(() => {
    axios
      .get("./data.json")
      .then((response) => {
        setStatePropsFun({
          list1: response.data.itemList1,
          list2: response.data.itemList2,
        });
      })
      .catch(() => {
        // handle error
        console.log("Error Loading data");
      });
  }, []);

  //Handeling Array to set value to checkbox from false to true
  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    propsVal.list1.map((res1) => {
      if (res1.id === value) {
        res1.checked = e.target.checked;
        return res1.checked;
      }
    });

    propsVal.list2.map((res2) => {
      if (res2.id === value) {
        res2.checked = e.target.checked;
        return res2.checked;
      }
    });
    //update list state
    setStatePropsFun({
      list1: propsVal.list1,
      list2: propsVal.list2,
    });
  };
  const handleMove = (direction) => {
    if (direction === "left") {
      propsVal.list1.map((result) => {
        if (result.checked === true) {
          propsVal.list2.push(result);
          setStatePropsFun({
            list1: propsVal.list1.filter((i) => !i.checked),
            list2: [...propsVal.list2],
          });
        }
        return null;
      });
    } else {
      if (direction === "right") {
        propsVal.list2.map((result) => {
          if (result.checked === true) {
            propsVal.list1.push(result);
            setStatePropsFun({
              list1: [...propsVal.list1],
              list2: propsVal.list2.filter((i) => !i.checked),
            });
          }
          return null;
        });
      }
    }
  };

  const moveAllData = (direction) => {
    if (direction === "left") {
      setStatePropsFun({
        list1: [...propsVal.list1, ...propsVal.list2],
        list2: [],
      });
    } else {
      setStatePropsFun({
        list2: [...propsVal.list2, ...propsVal.list1],
        list1: [],
      });
    }
  };

  const LeftlistDisplay = propsVal.list1.length ? (
    propsVal.list1.map((leftRes) => {
      return (
        <div
          className={classNames(
            leftRes.checked
              ? "font-black border-[#363F72]/[0.7] bg-[#F9F5FFB2]/[0.7]"
              : "font-normal border-[#363F7266]/[0.4] bg-[#fdfdfdb2]",
            "flex align-middle text-sm rounded-2xl h-11 w-full p-2 border-2 text-[#363F72] font-inter  active:border-[#363F72]  mb-1"
          )}
          key={leftRes.id}
        >
          <Checkbox
            type="checkbox"
            className="bg-[#F9F5FFB2]"
            size="xsmall"
            checked={leftRes.checked}
            value={leftRes.id}
            onChange={handleChange}
          />
          <span>{leftRes.text}</span>
        </div>
      );
    })
  ) : (
    <div className="error">Empty Content Please enter Data</div>
  );
  const RightlistDisplay = propsVal.list2.length ? (
    propsVal.list2.map((rightRes) => {
      return (
        <div key={rightRes.id}>
          <div
            className="font-black text-sm border-[#363F72]/[0.7] bg-[#F9F5FFB2]/[0.7]
              flex align-middle rounded-2xl h-11 w-full p-2 border-2  text-[#363F72] font-inter  active:border-[#363F72]  mb-1"
          >
            <Checkbox
              type="checkbox"
              className="bg-[#F9F5FFB2]"
              size="xsmall"
              checked={rightRes.checked}
              value={rightRes.id}
              onChange={handleChange}
            />
            <span>{rightRes.text}</span>
          </div>
        </div>
      );
    })
  ) : (
    <div className="error">Empty Content Please enter Data</div>
  );

  return (
    <div className="grid w-full h-40 xxs:h-56  mt-7 grid-flow-col-dense grid-col-3">
      <div className=" shadow-xl overflow-auto scrollbar-none scrollbar-thin scrollbar-thumb-[#76678D] scrollbar-track-[#76678D]
       scrollbar-thumb-rounded-full scrollbar-track-rounded-full">{LeftlistDisplay}</div>
      <div className="flex flex-col w-8 justify-center  place-items-center  justify-self-center">
        <button
          className="rounded-lg w-full bg-[#6C739F]"
          onClick={() => {
            handleMove("left");
          }}
        >
          <FontAwesomeIcon
            className="text-[#ffffff]"
            size="xs"
            icon={faAngleRight}
          />
        </button>
        <br />
        <button
          className="rounded-lg w-full bg-[#6C739F]"
          onClick={() => {
            moveAllData("right");
          }}
        >
          <FontAwesomeIcon
            className="text-[#ffffff]"
            size="xs"
            icon={faAnglesRight}
          />
        </button>
        <button
          className="mt-2 rounded-lg w-full bg-[#6C739F]"
          onClick={() => {
            handleMove("right");
          }}
        >
          <FontAwesomeIcon
            className="text-[#ffffff]"
            size="xs"
            icon={faAngleLeft}
          />
        </button>
        <br />
        <button
          className="rounded-lg w-full bg-[#6C739F]"
          onClick={() => {
            moveAllData("left");
          }}
        >
          <FontAwesomeIcon
            className="text-[#ffffff]"
            size="xs"
            icon={faAnglesLeft}
          />
        </button>
        <br />
      </div>
      <div className="overflow-auto shadow-xl  scrollbar-none scrollbar-thin scrollbar-thumb-[#76678D] scrollbar-track-[#76678D]
       scrollbar-thumb-rounded-full scrollbar-track-rounded-full">{RightlistDisplay}</div>
    </div>
  );
};
export default TransferList;
