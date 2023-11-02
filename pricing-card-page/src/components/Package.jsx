const Package = (props) => {
  return (
    <div className="md:h-[32rem] md:w-80 md:mx-0 mx-8 md:py-0 py-8 bg-asphalt rounded-md">
      {props.children}
    </div>
  );
};

export default Package;