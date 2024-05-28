import React, { useRef } from 'react';

export default function B7() {
  const toastRef = useRef(null);

  const showToast = () => {
    const toast = new bootstrap.Toast(toastRef.current);
    toast.show();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={showToast}>
        Show Toast
      </button>

      <div
        ref={toastRef}
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{ position: 'absolute', top: '20px', right: '20px' }}
      >
        <div className="toast-header">
          <img
            src="https://via.placeholder.com/20"
            className="rounded me-2"
            alt="Placeholder"
          />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  );
}
