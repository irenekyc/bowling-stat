const Page = ({ children }) => {
  return (
    <div className="bd-layout" data-testid="page-layout">
      {children}
    </div>
  );
};

export default Page;
