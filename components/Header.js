// Header.js
import React from "react";
import duckImg from "../assets/duck.png";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Button,
  TextField,
  Alert,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  CircularProgress,
  Box,
} from "@mui/material";
import Image from "next/image";

export default function Header() {
  const countries = ["India", "Canada", "Australia"]; // Add more countries as needed

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src={duckImg} alt="logo" width={45} height={45} quality={100} />
        <span className="text-white ml-2">Qfinder.io</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">
            Enterprise
          </a>
          <a href="#" className="text-white">
            Blog
          </a>
          <a href="#" className="text-white">
            Free Temporary Numbers
          </a>
        </div>

        <div className="group relative">
          <label htmlFor="country" className="text-white">
            Country
          </label>
          <select
            id="country"
            className="text-white bg-gray-700 px-3 py-1 rounded-md focus:outline-none"
          >
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

// export default Header;
