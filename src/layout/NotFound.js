import React from 'react'

function NotFound() {
  return (
    <div>
     <div>
  {/* Start Error Area */}
  <div className="error-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="error-content">
            <h1>404</h1>
            <h2>Oops! Page Not Found!</h2>
            <p>The page you are looking for does not exist.<br /> It might have been moved or deleted.</p>
            <div className="button">
              <a href="./" className="btn">Back to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Error Area */}
  {/* ========================= JS here ========================= */}
  <script>
    window.onload = function () {'{'}
    window.setTimeout(fadeout, 500);
    {'}'}
    function fadeout() {'{'}
    document.querySelector('#preloader').style.opacity = '0';
    document.querySelector('#preloader').style.display = 'none';
    {'}'}
  </script></div>

    </div>
  )
}

export default NotFound