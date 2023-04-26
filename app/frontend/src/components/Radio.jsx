export const Radio = ({ id, name, label, checked, onChange }) => (
  <label htmlFor={id} className="inline-flex items-center cursor-pointer">
    <input
      id={id}
      name={name}
      type="radio"
      checked={checked}
      onChange={onChange}
      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
    <span className="ml-2 text-sm text-gray-700">{label}</span>
  </label>
);

export default Radio;
