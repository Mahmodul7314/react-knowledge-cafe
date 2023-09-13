
import { PropTypes } from 'prop-types';
import Bookmark from './../Bookmark/Bookmark';



const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md-w-1/3 bg-gray-300 ml-4 mt-4 pt-4">
          
          <div>
            <h3 className='text-3xl'>Reading Time:{readingTime}</h3>
          </div>
           <h2 className="text-3xl ml-4">BookMarked Blogs: {bookmarks.length}</h2>
          {
             bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
          } 
        </div>
    );
};
Bookmarks.prototypes={
   bookmarks: PropTypes.array,
   readingTime: PropTypes.number
}

export default Bookmarks;