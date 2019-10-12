import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
const BubblePage = props => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  useEffect(() => {
    axiosWithAuth()
      .get("colors")
      .then(res => {
        // console.log(res.data);
        setColorList(res.data);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="BubblePage">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      {/* <div className="logout"> */}
      <button className="logoutButton" onClick={logout}>
        Logout
      </button>
      {/* </div> */}
    </div>
  );
};

export default BubblePage;
