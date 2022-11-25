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
        className={`${props.height} cursor-pointer duration-500 ease-in-out lg:scale-125 lg:hover:scale-150`}
        src={props.src}
        type={props.type ?? "image/svg+xml"}
        alt={props.alt ?? ""}
        height={props.height}
      />
    </a>
  );
}
