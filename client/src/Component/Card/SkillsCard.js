import React from "react";
import { ScrollMenu, VisibilityContext,Arrow } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import nodejs from "./../../assets/NodeJs.png";
import Mongo from "./../../assets/Mongo.png";

function SkillsCard() {

  return (
    <div>
      <ScrollMenu
      >
        <div className="w-2/3">
          <img src={nodejs} />
        </div>
        <div className="w-2/3">
          <img src={Mongo} />
        </div>
      </ScrollMenu>
    </div>
  );
}

export default SkillsCard;
