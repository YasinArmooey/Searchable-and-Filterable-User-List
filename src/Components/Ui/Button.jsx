const Button = ({ children, onClick, className, disabled  , ...props }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...props}
     className={` bg-[#111827] text-white transition-colors duration-300 ${className}`}
    >
      {children}
    </button>

  );
};

export default Button;
