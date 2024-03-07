
// import React from "react";
// import ReactDOM from "react-dom/client"

// const root = ReactDOM.createRoot(document.getElementById("root"))

// const Header = () => {
//     return (
//         <div className="header">
//             <div className="logo-container">
//                 <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
//             </div>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About us</li>
//                     <li>Contact Us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// // const styleCard ={
// //     backgroundColor: "#f0f0f0"
// // }
// const RestaurantCard = (props) => {
//     console.log(props)
//     return (
//         <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"></img>
//             <h3>{props.resName}</h3>
//             <h4>{props.cuisine}</h4>
//             <h4>4.4 stars</h4>
//             <h4>38 minutes</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="res-container">
                
//             <RestaurantCard 
//             resName="Meghna Foods" 
//             cuisine="Biryani, North Indian,Asian" /> 
//             <RestaurantCard resName="KFC"
//             cuisine="Burger, Fast Food"/> 
           

//             </div>
//         </div>)
// }
// const AppLayout = () => {
//     return (
//         <div className="app">
//             <Header />
//             <Body />
//         </div>
//     )
// }
// root.render(<AppLayout></AppLayout>)


import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); 
