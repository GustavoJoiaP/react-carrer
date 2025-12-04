import React, { useRef } from "react";
import "./dialog.style.css";

export function Dialog() {
  const dialogRef = useRef(null);

  function openDialog() {
    dialogRef.current.showModal();
  }

  function closeDialog() {
    dialogRef.current.close();
  }
  return(
    <React.Fragment>
      <dialog ref={dialogRef}>
        <button onClick={closeDialog} autoFocus>
          Close
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>

      <button onClick={openDialog}>Show the dialog</button>
  </React.Fragment>
  )
}