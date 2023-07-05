import * as React from "react";
import { sortToggle, updateDate } from "../../Utils/dashUtils";

import sortIco from "../../Assets/sidebar-nav icons/arrows-exchange-2.svg";

const SortDateOption = (): React.ReactNode => {
  window.addEventListener("load", () => {
    updateDate();
  });

  return (
    <div className="options-content-block">
      <h3>
        <span id="date"></span>
      </h3>
      <a href="#" id="sort-option" className="nav-bg-hover-btn" onClick={sortToggle}>
        <img src={sortIco} alt="uh oh time to go" />
        Sort By
      </a>
    </div>
  );
};

export default SortDateOption;
