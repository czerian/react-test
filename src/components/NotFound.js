import React from "react";
import { Child, Navigation } from '.';


export default function NotFound() {
function clickAlert(){
    alert("I am working")
}
  return (
    <div className="page notfound fx fxjcc fxdc">
      <Navigation/>
     <h2>404: Not Found - Page does not Exit</h2>
    </div>
  );
}