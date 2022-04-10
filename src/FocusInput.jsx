import React, { useEffect, useRef } from "react";

function FocusInput() {
  const InputRef = useRef(null);

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" ref={InputRef} />
      <label htmlFor="phone">Phone:</label>
      <input type="text" id="phone" />
      <button type="submit">Submit </button>
    </div>
  );
}

export default FocusInput;
