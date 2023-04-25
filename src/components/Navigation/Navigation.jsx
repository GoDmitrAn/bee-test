import { Link } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="housebee">housebee</Link>
      <Link to="honeycomb">honeycomb</Link>
      <Link to="honey">honey</Link>
      <Link to="table">table</Link>
    </nav>
  );
};
