import { BrowserRouter, Route, Link } from "react-router-dom";

function RedirectButton(props) {
  return (
    <Link
      to={props.redirect}
      className={
        props.className ||
        "bg-[#9975B6] m-1 hover:bg-transparent text-[#F4E3D7] font-semibold hover:text-[#9975B6] py-2 px-6 border border-transparent hover:border-[#9975B6] rounded"
      }
    >
      {props.name}
    </Link>
  );
}
export default RedirectButton;
