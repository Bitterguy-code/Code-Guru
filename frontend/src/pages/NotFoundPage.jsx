import "./notfound.css";


//displays on error page or if page not found
export default function NotFoundPage() {
  return (
    <div className="not_container">
      <div className="not_left_container"></div>
      <div className="not_right_container">
        <h1>Oh No ˙◠˙</h1>
        <h2>The page you were looking for does not exist.</h2>
        <h2>Please go back to the <a href="/">home page</a>.</h2>
      </div>
    </div>
  );
}
