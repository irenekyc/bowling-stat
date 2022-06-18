import Dropdown from "react-bootstrap/Dropdown";
import { SortingIcon } from "../icons";

const SortingDropdown = ({
  toggleSortBy,
  descLabel = undefined,
  ascLabel = undefined,
}) => {
  return (
    <Dropdown data-testid="sorting-dropdown">
      <Dropdown.Toggle
        data-testid="sorting-dropdown-button"
        split={false}
        className="bd-table__button bd-table__button--sorting"
      >
        <SortingIcon />
      </Dropdown.Toggle>
      <Dropdown.Menu renderOnMount className="bd-table__sorting-dropdown">
        <Dropdown.Item
          data-testid="sorting-dropdown-button-desc"
          onClick={() => toggleSortBy(true)}
        >
          {descLabel || "Highest"}
        </Dropdown.Item>
        <Dropdown.Item
          data-testid="sorting-dropdown-button-asc"
          onClick={() => toggleSortBy(false)}
        >
          {ascLabel || "Lowest"}
        </Dropdown.Item>
      </Dropdown.Menu>
      {/* <div className="bd-table__sorting-dropdown"></div> */}
      {/* </button> */}
    </Dropdown>
  );
};

export default SortingDropdown;
