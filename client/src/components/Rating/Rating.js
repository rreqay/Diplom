import {Container} from "react-bootstrap";
import { useState } from 'react';

import classNames from 'classnames';
import './rating.css'

const Rating = () => {
// const ratingItemsList = document.querySelectorAll('.rating_item');
// const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

// ratingItemsArray.forEach(item => 
//     item.addEventListener('click', () => {
//         const{ itemValue } = item.dataset;
//         item.parentNode.dataset.totalValue = item.dataset.itemValue
//     })

// );

const [value, setValue] = useState()
const stars = [5, 4, 3, 2, 1]

    return (
            <Container className="rating">
                {stars.map(star => {
                    return <div className={classNames((value === star || value >= star) && "rating__item__selected", "rating__item")} onClick={() => setValue(star)}>★</div>
                })}
            </Container>
    )
}

export default Rating