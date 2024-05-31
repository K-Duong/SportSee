import loadingIcon from "../../assets/Spinne.gif";

import "./style.scss";

function LoadingContent() {
  return (
    <div className="loading-content">
      <img src={loadingIcon} />
      <span>is loading...</span> 
      </div>
  );
}

export default LoadingContent