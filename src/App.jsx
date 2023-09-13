

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks, setBookmarks] =useState([]);

const [readingTime, setReadingTime] = useState(0);


const handleAddBookmark= blog =>{
const newBookmarks =[...bookmarks,blog];
setBookmarks(newBookmarks);
}

const handleMarkAsRead =(id,time )=>{
const newReadingTime = readingTime + time;
setReadingTime (newReadingTime);

// remove the read blog from bookmark
// console.log('remove bookmark',id)
const remainingBookmakrs = bookmarks.filter(bookmark => bookmark.id !== id)
setBookmarks(remainingBookmakrs);
}

  return (
    <>
     
<Header></Header>
  <div className='md:flex max-w-7xl mx-auto'>
   <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
  </div>
     
    </>
  )
}

export default App
