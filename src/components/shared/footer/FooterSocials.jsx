/* eslint-disable no-unused-vars */
import { MenuItem, TextField } from "@mui/material";
import React from "react";
import GoogleDownload from "../../../assets/google play logo.svg"
import AppleDownload from "../../../assets/AppStore-logo.svg"

const languages = [
  {
    label: "English",
    value: "English",
  },
  {
    label: "Twi",
    value: "Twi",
  },
  {
    label: "Ga",
    value: "Ga",
  },
  {
    label: "Fante",
    value: "Fante",
  },
];

function FooterSocials() {
  return (
    <>
      <h1 className="display-5 fw-bold">
        Easy <br /> <span>ahead</span>
      </h1>
      <p>
        We take the work out of connecting with others so you can accomplish
        more
      </p>
      <TextField
        select
        placeholder="English"
        size="small"
        sx={{ width: 300 }}
        defaultValue="English"
      >
        {languages.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <div className="my-4">
        <img src={GoogleDownload} alt="" width={135} className="me-4"/>
        <img src={AppleDownload} alt="" />
      </div>
    </>
  );
}

export default FooterSocials;
