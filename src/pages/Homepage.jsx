import React from "react";
import Picture from "../components/Picture";

const Homepage = (props) => {
  const { photographer, src } = props;
  return (
    <>
      <Picture photographer={photographer} src={src} />
    </>
  );
};

export default Homepage;
