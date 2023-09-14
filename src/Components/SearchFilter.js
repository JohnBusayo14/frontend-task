// // src/components/SearchFilter.js
// import React, { useState } from 'react';
// import Cards from './Cards';

// const SearchFilter = ({ data, categories }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   const filteredData = data?.filter(
//     (item) =>
//       item.subject.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedCategory === '' || item.category === selectedCategory)
//   );

//   return (
//     <div className="p-4 w-full flex flex-col ">
//       <div className='w-full h-32 flex flex-row gap-20 my-5 items-center'>
//       <div className="mb-4 ">
//         <input
//           type="text"
//           placeholder="Search by title..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="p-2 border rounded-md w-full"
//         />
//       </div>
//       <div className="mb-4">
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="p-2 border rounded-md w-full"
//         >
//           <option value="">All Categories</option>
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredData.map((item) => (
//           <Cards key={item.id} title={item.title} category={item.category} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchFilter;



// SearchFilter.js
// import React, { useState } from 'react';

// const SearchFilter = ({ data }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');

//   // Filter cards based on the search term and selected category
//   const filteredCards = data?.filter((card) => {
//     return (
//       card.subject?.toLowerCase().includes(searchTerm?.toLowerCase()) &&
//       (selectedCategory === '' || card.category === selectedCategory)
//     );
//   });

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         placeholder="Search by title"
//         className="p-2 border rounded-md w-full"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <select
//         className="p-2 border rounded-md mt-2"
//         value={selectedCategory}
//         onChange={(e) => setSelectedCategory(e.target.value)}
//       >
//         <option value="">All Categories</option>
//         {/* Replace with your category options */}
//         <option value="Beginner">Category 1</option>
//         <option value="Intermediate">Category 2</option>
//         <option value="Advance">Category 2</option>

//       </select>
//     </div>
//   );
// };

// export default SearchFilter;




// SearchFilter.js
import React, { useState } from 'react';


const SearchFilter = ({ cards, setFilteredCards }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = () => {
    const filtered = cards.filter(
      (card) =>
        card.subject.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' || card.category === selectedCategory)
    );
    setFilteredCards(filtered);
  };

  return (
    
         <div className='w-full h-[200px] flex flex-col gap-5 my-2 items-center  md:items-center md:justify-center sm:items-center sm:justify-center'>
        
         
         <input
        type="text"
        placeholder="Search by title"
        className="p-2 border rounded-md my-3 outline-none  lg:w-[15%] lg:mx-5  sm: w-[80%]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       

    
      <select
        className="p-2 border rounded-md lg:w-[15%] lg:mx-5 outline-none sm: w-[80%]"
        value={selectedCategory}
        color='#4c956c '
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option  className=' font-medium text-base text-center' value="">All Categories</option>
        {/* Add your category options here */}
        <option className=' font-medium text-base text-center' value="Beginner">Beginner</option>
        <option  className='font-medium text-base text-center' value="Intermediate">Intermediate</option>
        <option  className=' font-medium text-base text-center' value="Advance">Advance</option>
      </select>

     
      <button
        className="mt-2 flex justify-center items-center sm:w-[20%] p-2 bg-[#4c956c] text-center text-white rounded-md  lg:mx-5 h-[40px]"
        onClick={handleSearch}
      >
        Search
      </button>
         </div>
  );
};

export default SearchFilter;


