import { Link } from "react-router-dom";

const BreadCrumb = ({ isActive, label, link = undefined }) => {
  if (!link || isActive) {
    return <span> {label} </span>;
  }
  return (
    <>
      <Link to={link}>{label}</Link>
      <span> {" > "}</span>
    </>
  );
};

export default BreadCrumb;
