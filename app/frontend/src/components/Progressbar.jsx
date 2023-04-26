export const ProgressBar = ({ progress, max }) => (
  <div className="w-full h-4 bg-gray-300 rounded">
    <div
      className="h-full bg-indigo-600 rounded"
      style={{ width: `${(progress / max) * 100}%` }}
    ></div>
  </div>
);

export default ProgressBar;
