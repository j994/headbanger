import React from 'react';
import './beers.css';
import BeerCard from '../BeerCard/BeerCard';

const Beer = () => {
    return (
        <article class="beer dt w-100 bg-gold">
            <div class="dtc v-mid tc white ph3 ph4-l">
                <BeerCard />
            </div>
        </article>
    )
}

export default Beer;