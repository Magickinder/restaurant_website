import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
        <p className='p__opensans'>
          Aenean vulputate dapibus dui in iaculis. 
          Morbi elementum lorem vel hendrerit sollicitudin. 
          Praesent quis libero sodales, interdum velit in, eleifend tortor.
          Maecenas hendrerit ante eu odio rutrum, vel fermentum sapien varius.
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Lou</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign'/>
      </div>
    </div>
  </div>
);

export default Chef;
