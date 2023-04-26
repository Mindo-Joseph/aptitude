export const Breadcrumb = ({ items, className }) => (
  <nav className={`text-sm text-gray-600 ${className}`} aria-label="Breadcrumb">
    <ol className="list-none p-0 inline-flex">
      {items.map((item, index) => (
        <li key={item.label} className={index !== 0 ? "ml-4" : ""}>
          {item.link ? (
            <a href={item.link} className="text-blue-600">
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
          {index !== items.length - 1 && (
            <span className="mx-2 text-gray-400">{`/`}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
