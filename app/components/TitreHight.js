import React from "react";
import Link from "next/link";

const TitreHight = ({text}) => {
  return (
    <div className="Entete border-b-2 border-light-color">
      <span className="text1 uppercase">{text}</span>
    </div>
  );
};

export default TitreHight;
