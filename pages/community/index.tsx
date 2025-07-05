import { useState } from "react";

const CommunityList = () => {
  console.log("COMMUNITY PAGES COMPONENT");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY{" "}
      <button
        onClick={() => {
          alert("Button Pressed!");
        }}
        style={{ margin: "15px" }}
      >
        PressMe
      </button>
    </div>
  );
};

export default CommunityList;
