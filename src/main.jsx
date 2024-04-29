import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/Route";
import { AuthProvider } from "./Provider/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>
);



// Applying class directly on body
// function App() {
//   return (
//     <div className="dark"> {/* Or remove 'dark' for light mode */}
//       {/* Your application content */}
//       <button onClick={() => document.body.classList.toggle('dark')}>
//         Toggle Dark Mode
//       </button>
//     </div>
//   );
// }
