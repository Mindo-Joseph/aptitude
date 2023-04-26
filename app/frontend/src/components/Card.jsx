export const Card = ({ children, className }) => (
  <div
    className={`bg-white overflow-hidden shadow rounded-lg p-4 ${className}`}
  >
    {children}
  </div>
);

export default Card;
