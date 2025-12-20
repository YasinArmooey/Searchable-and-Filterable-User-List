const Input = ({placeholder , value , onChange , className}) => {
  return (
      <input
       className={` py-2 px-3 outline-none flex items-center
        placeholder:font-bold font-semibold text-[#0F172A] rounded-md ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
  );
};

export default Input;
