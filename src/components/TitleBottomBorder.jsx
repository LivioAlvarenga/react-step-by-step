export default function TitleBottomBorder(props) {
  return (
    <div className="relative my-7 lg:my-8">
      <h2
        className={`${
          props.textColor ?? "text-inherit"
        } text-center text-xl font-bold lg:text-2xl`}
      >
        {props.name}
      </h2>
      <span
        className={`${props.borderBottomColor} absolute right-1/2 mt-1 h-1 w-6 translate-x-1/2 lg:w-7`}
      ></span>
    </div>
  );
}
