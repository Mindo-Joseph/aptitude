export const Alert = ({ text, type = "info", onClose }) => {
  const colors = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <div
      className={`relative px-4 py-3 rounded-md shadow-sm ${colors[type]}`}
      role="alert"
    >
      <span className="font-semibold">{text}</span>
      {onClose && (
        <button
          onClick={onClose}
          type="button"
          className="absolute top-0 right-0 p-4"
        >
          <i className="text-xl text-gray-400 fas fa-times"></i>
        </button>
      )}
    </div>
  );
};
