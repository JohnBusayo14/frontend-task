import React ,{useState} from 'react'
import Header from './Header'
import Search from './Search'
import initialCards from '../Components/initialDetails'
import image33 from "../assets/images/logo.jpg"
import Filter from './Filter'
import Cards from './Card'
import SearchFilter from './SearchFilter'
import data from './initialDetails'
import CardList from './CardList'


// const initialCards = [
//   // Sample card data
//   { id: 1,
//     subject: 'Mathematics 101',
//     title : 'ome',
//     category: 'Beginner',
//      description: 'This is a mathematics meant for the beginner class',
//      intructor: 'Mr Kolawole',
//       url:image33},
//       { id: 1,
//         subject: 'Mathematics 101',
//         title: 'two',
//         category: 'Beginner',
//          description: 'This is a mathematics meant for the beginner class',
//          intructor: 'Mr Kolawole',
//          url:image33},
//           { id: 1,
//             subject: 'Mathematics 101',
//             title : 'three',
//             category: 'Beginner',
//              description: 'This is a mathematics meant for the beginner class',
//              intructor: 'Mr Kolawole',
//              url:image33},
// ];


const Mainsection = () => {

  const [filteredCards, setFilteredCards] = useState(initialCards);

  
  
    // const filteredCards = selectedCategory
    //   ? data.filter((card) => card.category === selectedCategory)
    //   : data;
  return (
    <div className='card w-full flex flex-col'>
         <Header/>

         <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Select a Course</h1>
      <SearchFilter cards={initialCards} setFilteredCards={setFilteredCards} />
      <CardList cards={filteredCards} />
    </div>
         {/* <Search data={data}/>
         <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCards.map((card) => (
          <Cards key={card.id} title={card.title} category={card.category} />
        ))}
      </div> */}
      
       
          
         
    </div>

  )
}

export default Mainsection