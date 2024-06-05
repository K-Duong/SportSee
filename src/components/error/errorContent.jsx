import "./style.scss";

function ErrorContent({ error }) {
  return (
    <div className="error-content">
      {error.status && <h1 className="error-status">{error.status}</h1>}
      <h2 className="error-message">{error.message}</h2>
    </div>
  );
}
export default ErrorContent;
