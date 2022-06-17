import Dropdown from "react-bootstrap/Dropdown";
import { SortingIcon } from "../icons";

const SortingDropdown = ({
  toggleSortBy,
  descLabel = undefined,
  ascLabel = undefined,
}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        split={false}
        className="bd-table__button bd-table__button--sorting"
      >
        <SortingIcon />
      </Dropdown.Toggle>
      <Dropdown.Menu className="bd-table__sorting-dropdown">
        <Dropdown.Item onClick={() => toggleSortBy(true)}>
          {descLabel || "Highest"}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => toggleSortBy(false)}>
          {ascLabel || "Lowest"}
        </Dropdown.Item>
      </Dropdown.Menu>
      {/* <div className="bd-table__sorting-dropdown"></div> */}
      {/* </button> */}
    </Dropdown>
  );
};

export default SortingDropdown;
