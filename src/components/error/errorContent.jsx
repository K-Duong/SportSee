import "./style.scss"

function ErrorContent({error}) {
  return (
    <div className="error-content">
      <h1 className="error-status">
        <span>{error.status}</span>{" "}
      </h1>
      <h2 className="error-message">
        <span>{error.message}</span>
      </h2>
    </div>
  );
}
export default ErrorContent