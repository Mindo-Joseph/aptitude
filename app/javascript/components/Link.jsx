export const Link = ({ href, children }) => (
  <a href={href} className="text-indigo-600 hover:text-indigo-500">
    {children}
  </a>
);

export default Link;
