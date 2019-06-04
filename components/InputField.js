const InputField = ({ onChangeHandle }) => {
  return (
    <input
      className="inputfield"
      placeholder="choose your fruits"
      type="search"
      onChange={onChangeHandle}
    />
  );
};
