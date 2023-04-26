export const Avatar = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`h-8 w-8 rounded-full object-cover ${className}`}
  />
);

export default Avatar;
