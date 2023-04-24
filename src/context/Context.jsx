import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MyContext = createContext();
export const Myprovayder = ({ children }) => {
  const [togle, setTogle] = useState(false);
  const [vedio, setVedio] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/playlist/videos/",
    params: { id: "PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr", hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": "121b91f383mshd97017e89f60c60p1b2df0jsnf92734a81a20",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };
  const geta = () => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.contents);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    geta();
  }, []);

  return (
    <MyContext.Provider
      value={{ togle, setTogle, data, vedio, setVedio, search, setSearch }}
    >
      {children}
    </MyContext.Provider>
  );
};
