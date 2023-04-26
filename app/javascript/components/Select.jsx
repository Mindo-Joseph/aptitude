export const Select = ({ id, label, value, onChange, options }) => (
  <div className="w-full">
    {label && (
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
    )}
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      {options.map(({ text, value }) => (
        <option value={value} key={value}>
          {text}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
