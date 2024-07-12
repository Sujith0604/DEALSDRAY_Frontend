const InputComponent = ({ title, storvar, type, id, placeholder }) => {
  return (
    <div className=" w-full flex gap-2 items-center justify-between">
      <label className=" font-semibold " id={id}>
        {title}
      </label>
      <input
        className="border p-4"
        type={type}
        placeholder={placeholder}
        ref={storvar}
      />
    </div>
  );
};

export default InputComponent;
