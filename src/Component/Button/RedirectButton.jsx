import { BrowserRouter, Route, Link } from "react-router-dom";

function RedirectButton(props) {
  return (
    <Link
      to={props.redirect}
      className="bg-purple-400 m-1 hover:bg-transparent text-white font-semibold hover:text-purple-400 py-2 px-6 border border-transparent hover:border-purple-400 rounded"
    >
      {props.name}
    </Link>
  );
}
export default RedirectButton;
