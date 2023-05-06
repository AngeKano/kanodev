import React from "react";
import Link from "next/link";

const itemNavbar = (props) => {
  return (
    <Link href="/" legacyBehavior>
      <a>
        <div
          id="item"
          className={
            props.active == "true"
              ? "py-2 px-4 rounded-full  text-white activation"
              : "py-2 px-4 rounded-full  text-white"
          }
        >
          <span className="uppercase">{props.label}</span>
        </div>
      </a>
    </Link>
  );
};

export default itemNavbar;
