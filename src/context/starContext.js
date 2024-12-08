import React from 'react';

const StarRating = ({ rating }) => {
    const safeRating = rating || 0;
    const fullStars = Math.floor(safeRating);
    const decimalPart = safeRating % 1;

    return (
        <div className="star-rating">
            {[...Array(5)].map((_, i) => {
                if (i < fullStars) {
                    return <span key={i} style={{color: '#ffc303'}}>★</span>;
                }
                if (i === fullStars && decimalPart > 0) {
                    return <span key={i} style={{
                        background: `linear-gradient(to right, #ffc303 ${decimalPart * 100}%, gray ${decimalPart * 100}%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>★</span>;
                }
                return <span key={i} style={{color: '#d9d9d9'}}>★</span>;
            })}
        </div>
    );
};

export {StarRating};