export const Tooltip = ({ text, placement, children }) => (
  <div className="relative">
    {children}
    <div
      className={`absolute z-10 p-2 mt-4 rounded-md shadow-lg bg-black text-white text-xs ${placement}`}
    >
      {text}
    </div>
  </div>
);

export default Tooltip;
