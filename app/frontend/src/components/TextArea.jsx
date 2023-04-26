export const Textarea = ({ id, label, onChange, value, placeholder }) => (
  <div className="w-full">
    {label && (
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
    )}
    <textarea
      id={id}
      onChange={onChange}
      value={value}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      placeholder={placeholder}
    />
  </div>
);


export default Textarea;
