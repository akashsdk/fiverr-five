import React from 'react'
import './MoviesCart.css';
import { Link } from 'react-router-dom';

import Icon from '../Icon/IMDb.png';

export default function MoviesCart({Img, Name, Catalogue, IMD, Language, Released, Plot}) {
  return (
    <Link className='MoviesCart-Body'>
        <img className='MoviesCart-Img' src={Img} alt='Cart'/>
        <div className='MoviesCart-Box'>
            <p className='MoviesCart-Text1'>{Name}</p>
            <p className='MoviesCart-Text2'>{Catalogue}</p>
            <p className='MoviesCart-Text2'>{Language}</p>
            <div className='MoviesCart-Div'>
                <img src={Icon} className='MoviesCart-Icon' alt=''/>
                <p>{IMD}</p>
            </div>
            <p className='MoviesCart-Text2'>Released: {Released}</p>

            <p className='MoviesCart-Text3'>Plot: {Plot}</p>
        </div>
    </Link>
  )
}
