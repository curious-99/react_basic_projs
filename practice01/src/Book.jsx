import React from 'react'
import './Book.css';


const Book = (props) => {

    const {image,title,publisher,price} = props;
    return (
        <div className='book'>
            <div className='book-img'>
                <img src={image} />
                {/* <img src="https://m.media-amazon.com/images/I/71W2yDiQ3xL._AC_UY436_FMwebp_QL65_.jpg"/> */}
            </div>
            <div className='book-info'>
                <h2>{title}</h2>
                <p className='book-author'> by {publisher}</p>
                <p className='book-price'>${price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Book
