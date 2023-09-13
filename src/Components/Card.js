// // src/components/Card.js
// import React from 'react';
// import { Card } from 'antd';
// import image33 from "../assets/images/logo.jpg"

// const { Meta } = Card;

// const Cards = ({description,image,subject,intructor }) => {
//   return (
//     <>

//   <Card
//     hoverable
//     style={{ width: 240, height:240 }}
//     cover={<img alt="example" src={image33} />}
//   >
//     <Meta title={subject} description={description} />
//     <h1>{description}</h1>
//     <h1>{subject}</h1>
//   </Card>

// </>
//   );
// };

// export default Cards;

// Card.js
// Card.js
// Card.js
import React from 'react';

const Card = ({ title, description, category,subject ,url,intructor}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <img src={url} alt='image hare'/>
      <div className="font-bold text-xl py-3 mb-2">{subject}</div>
      <p className="text-[#4c956c] text-base">{intructor}</p>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-sm italic">{description}</p>
        <p className="text-[#4c956c] text-sm font-semibold">{category}</p>
      </div>
    </div>
  );
};

export default Card;