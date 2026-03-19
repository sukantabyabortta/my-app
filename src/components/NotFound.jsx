import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{marginTop: "50px", display: "block", float: "left", width: "100%"}}>
      <div className="notFound">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist.</p>

        <Link to="/" className="back-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;