import React, { useState } from 'react';

const Tour = ({ data, removeTour }) => {
  const [readmore, setReadMore] = useState(true);
  return (
    <>
      <h2>tours component</h2>;
      {data.map((place) => {
        const { id, name, info, price, image } = place;
        return (
          <div>
            <article className="single-tour">
              <section key={id}>
                <img src={image} alt={name} />
                <footer>
                  <div className="tour-info">
                    <h4>{name}</h4>
                    <p>{price}</p>
                  </div>

                  <p>{readmore ? info : `${info.substring(0, 100)}...`}</p>
                  <button onClick={() => setReadMore(!readmore)}>
                    {readmore ? 'show less' : 'show more'}
                  </button>
                  <button className="delete-btn" onClick={() => removeTour(id)}>
                    Not Interested
                  </button>
                </footer>
              </section>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default Tour;
