import React, { useState } from "react";
import { useNavigate } from "react-router";

import Select from "react-select";
import { colourOptions } from "../assets/data";
import { useEffect } from "react";


// const Checkbox = ({ children, ...props }) => (
//   <label style={{ marginRight: "1em" }}>
//     <input type="checkbox" {...props} />
//     {children}
//   </label>
// );

const SelectDropDown = () => {
  const navigate = useNavigate()
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [inputVal, setInputVal] = useState("")

  const selectStyles = {

    control: (styles) => ({
      ...styles,
      fontSize: '16px',
      padding:"5px",
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      borderRadius: '24px',
      border: '1px solid #ccc',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        borderColor: '#aaa',
      },
    }),
    menu: (styles) => ({
      ...styles,
      borderRadius: '24px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      backgroundColor: isSelected ? '#007bff' : 'transparent',
      color: isSelected ? '#fff' : '#333',
      '&:hover': {
        backgroundColor: '#5DD2EE',
      },
    }),
  };
  
  return (
  
    <>
      <div className=" w-[100%] flex flex-col items-center justify-center">
        <div className="md:w-[50%] rounded-lg w-[90%]">
          <Select
            className="text-xl font-sans font-medium shadow-md rounded-lg"
            classNamePrefix="select"
            defaultValue={colourOptions[0]}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            value={inputVal}
            onChange={(v)=> {
              setInputVal(v)
              navigate("/search")
            }}
            options={colourOptions}
            placeholder={"Search Language..."}
            styles={selectStyles}
          />
          
        </div>
        <div>

        </div>
      </div>
    </>
  );
};

export default SelectDropDown;