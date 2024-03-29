import React from "react";
import Link from "next/link";

const itemNavbar = (props) => {
  return (
    <Link href={props.link}>
      <div
        id="item"
        className={
          props.active == "true"
            ? "py-1 px-3 rounded-full  text-white activation"
            : "py-1 px-3 rounded-full  text-white "
        }
      >
        <span className="uppercase">{props.label}</span>
      </div>
    </Link>
  );
};

export default itemNavbar;
