import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Card from './card';
import StyledCardGrid from './styled/card-grid';

// const tempCardData = {
//   type: ['blog', 'tech', 'case study', 'learning'],
//   title: [
//     'Vitae tempus quam pellentesque nec',
//     'Et malesuada fames ac turpis egestas integer',
//     'Augue lacus viverra vitae congue',
//     'Dui sapien eget mi proin sed',
//     'Gravida rutrum quisque non tellus orci ac auctor',
//   ],
//   lorem: [
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc vel risus commodo viverra.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh venenatis cras. Mauris pellentesque.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Et malesuada fames ac turpis egestas.',
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus cras.',
//   ],
//   getRandomItem: function (prop) {
//     return this[prop][Math.floor(Math.random() * this[prop].length)];
//   },
// };

export default function CardGrid() {
  return (
    <StyledCardGrid>
      <h2>My Projects</h2>
      <p>
        A mix of client & personal work. These will be expanded upon soon with an overview of each project's goals, challenges & learnings.
      </p>
      <div className="cards">
        <Card title="Project 1">
          <StaticImage
            src="../../images/pugs/ayrey.png"
            alt="Pug"
            placeholder="blurred"
          />
          <div className="card-content">
            <span className="type">Tailwind, Javascript</span>
            <h3>Andy Ayrey</h3>
            <p>A website rebuild, to showcase the benefits of Tailwind CSS, for a client.</p>
          </div>
        </Card>
        <Card title="Project 2">
          <StaticImage
            src="../../images/pugs/Recognise.png"
            alt="Pug"
            placeholder="blurred"
          />
          <div className="card-content">
            <span className="type">CSS, React</span>
            <h3>Recognise</h3>
            <p>A simple app that identifies faces within a photo the user selects.</p>
          </div>
        </Card>
        <Card title="Project 3">
          <StaticImage
            src="../../images/pugs/Transmission.jpeg"
            alt="Pug"
            placeholder="blurred"
          />
          <div className="card-content">
            <span className="type">Tailwind, React, Node</span>
            <h3>Transmission Paradox</h3>
            <p>A website for an art collective to share static, dynamic & interactive media. </p>
          </div>
        </Card>
      </div>
    </StyledCardGrid>
  );
}
