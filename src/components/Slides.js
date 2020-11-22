import React from 'react';
import '../Styles/slides.css';

const Slide = () => {

    const card = [1,2,3,4,5,6,7,8,9,10];

    const moveLeft = () => {
        var cards = document.getElementById('cards');

        cards.scrollBy(-100, 0);
    }

    const moveRight = () => {
        var cards = document.getElementById('cards');

        cards.scrollBy(100, 0);
    }

    return <React.Fragment>
        <div className='container'>
            <div className='navigate'>
                <button className='button' onClick={moveLeft}>Left</button>
            </div>
            <div className='cards' id='cards'>
                {
                    card.map((cardData, key) => {
                        return <div className='card'>
                            {cardData}
                            kfdjkg gdnkg dfhndfkhf hgfnhkfg hgfnhgf hfknh h
                        </div>
                    })
                }
            </div>
            <div className='navigate'>
                <button className='button' onClick={moveRight}>Right</button>
            </div>
        </div>
    </React.Fragment>
}

export default React.memo(Slide);