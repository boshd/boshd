const GlossyButton = ({ type, className, onClick, buttonStyle = {}, children }: any) => {
  return (
    // <button className="bg-red-400 p-2 rounded-full bg-gradient-to-t from-[#E4E4E4] via-[#B0B0B0] to-white border-1 border-black border-1">

    <button className={className} onClick={onClick} style={buttonStyle} type={type || "submit"}>
      {children}
    </button>
  );
};

export default GlossyButton;
