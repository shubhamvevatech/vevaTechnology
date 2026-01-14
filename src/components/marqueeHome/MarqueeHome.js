// import React from "react";
// import "./MarqueeHome.css";

// // Example images, aap apne assets ka path yahan use kar sakte hain
// import reactImg from "../../assets/images/react.png";
// import nodeImg from "../../assets/images/node.png";
// import aiImg from "../../assets/images/ai.png";
// import cloudImg from "../../assets/images/cloud.png";
// import designImg from "../../assets/images/design.png";

// const marqueeItems = [
//   { img: reactImg, text: "React JS" },
//   { img: nodeImg, text: "Node JS" },
//   { img: aiImg, text: "Artificial Intelligence" },
//   { img: cloudImg, text: "Cloud Computing" },
//   { img: designImg, text: "UI/UX Design" },
// ];

// const MarqueeHome = () => {
//   return (
//     <div className="marquee-container">
//       <div className="marquee-track">
//         {marqueeItems.map((item, index) => (
//           <div className="marquee-item" key={index}>
//             <img src={item.img} alt={item.text} />
//             <span>{item.text}</span>
//           </div>
//         ))}
//         {/* Duplicate for infinite loop */}
//         {marqueeItems.map((item, index) => (
//           <div className="marquee-item" key={index + marqueeItems.length}>
//             <img src={item.img} alt={item.text} />
//             <span>{item.text}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MarqueeHome;


import React from "react";
import "./MarqueeHome.css";

import reactImg from "../../assets/images/react.png";
import nodeImg from "../../assets/images/node.png";
import aiImg from "../../assets/images/ai.png";
import cloudImg from "../../assets/images/cloud.png";
import designImg from "../../assets/images/design.png";

const marqueeItems = [
  { img: reactImg, text: "React JS" },
  { img: nodeImg, text: "Node JS" },
  { img: aiImg, text: "Artificial Intelligence" },
  { img: cloudImg, text: "Cloud Computing" },
  { img: designImg, text: "UI/UX Design" },

  { img: reactImg, text: "React JS" },
  { img: nodeImg, text: "Node JS" },
  { img: aiImg, text: "Artificial Intelligence" },
  { img: cloudImg, text: "Cloud Computing" },
  { img: designImg, text: "UI/UX Design" },
];

const MarqueeHome = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        {marqueeItems.map((item, index) => (
          <div className="marquee-item" key={index}>
            <img src={item.img} alt={item.text} />
            <span>{item.text}</span>
          </div>
        ))}
        {/* Duplicate for seamless infinite scroll */}
        {marqueeItems.map((item, index) => (
          <div className="marquee-item" key={index + marqueeItems.length}>
            <img src={item.img} alt={item.text} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeHome;

