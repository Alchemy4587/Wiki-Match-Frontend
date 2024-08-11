import React, { useState } from "react";
import Congratulations from "../components/congratulations";
import ConfirmEditData from "../components/edit-data";
// import MoreDescription from "../components/more-description";
import Paging from "../components/paging";
import AudioCard from "../components/AudioCard";

import { HeroSection } from "../components/HeroSection";
import Card from "../Components/Card";

function Search() {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const toggleLinkModal = () => {
    setShowLinkModal(!showLinkModal);
  };
  return (
    <div>
      <AudioCard /> <br />
      <br />
      <div className="">
        <Card toggleLinkModal={toggleLinkModal} />
      </div>
      <Paging />
      <div className="p-4 w-full">
        {/* <MoreDescription /> */}
        <ConfirmEditData isOpen={showLinkModal} closeModal={toggleLinkModal} />
        <Congratulations />
      </div>
    </div>
  );
}

export default Search;
