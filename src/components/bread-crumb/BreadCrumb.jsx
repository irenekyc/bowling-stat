import { Link } from "react-router-dom";

const BreadCrumb = ({ isActive, label, link = undefined }) => {
  if (!link || isActive) {
    return <span data-testid="bread-crumb-text"> {label} </span>;
  }
  return (
    <>
      <Link data-testid="bread-crumb-link" to={link}>
        {label}
      </Link>
      <span> {" > "}</span>
    </>
  );
};

export default BreadCrumb;
