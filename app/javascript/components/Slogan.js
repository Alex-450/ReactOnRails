import React from "react";
import styles from "../components/css/app.module.css";
import { useEffect, useState } from "react";

// function Slogan() {
//   const [slogan, setSlogan] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//   }

//   const handleChange = (event) => {
//     event.preventDefault();
//   };

//   const handleSubmit = (event) => {
//     console.log("submitted");
//     event.preventDefault();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Want your slogan on our race?</h1>
//         <p>Submit your entry here:</p>
//         <label>
//           First name
//           <input type="text" onChange={handleChange} />
//         </label>
//         <label>
//           Last name
//           <input type="text" onChange={handleChange} />
//         </label>
//         <label>
//           Email address
//           <input type="email" onChange={handleChange}></input>
//         </label>
//         <label>
//           Your slogan idea
//           <textarea onChange={handleChange} />
//         </label>
//         <p>max 50 characters</p>
//         <button>Submit ↑</button>
//       </form>
//     </div>
//   );
// }

// export default Slogan;
