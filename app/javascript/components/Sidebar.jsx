export const Sidebar = ({ children, className }) => (
  <div className={`w-64 min-h-screen bg-white shadow-lg p-4 ${className}`}>
    {children}
  </div>
);

export default Sidebar;
