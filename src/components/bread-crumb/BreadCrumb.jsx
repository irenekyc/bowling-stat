const BreadCrumb = ({ isActive, label, link = undefined }) => {
  if (!link || isActive) {
    return <span> {label} </span>;
  }
  return (
    <>
      <a href={link}>{label}</a>
      <span> {" > "}</span>
    </>
  );
};

export default BreadCrumb;
