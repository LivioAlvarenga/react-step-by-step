export default function IconLink(props) {
  return (
    <a
      className="cursor-pointer"
      href={props.href ?? "/"}
      title={props.title ?? props.alt}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className={`${props.height} cursor-pointer lg:duration-500 lg:ease-in-out lg:hover:scale-125`}
        src={props.src}
        type={props.type ?? "image/svg+xml"}
        alt={props.alt ?? ""}
        height={props.height}
      />
    </a>
  );
}
