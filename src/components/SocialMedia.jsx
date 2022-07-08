import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/VDMaya" target="_blank"> 
      <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/vinaymayavanshi" target="_blank">
      <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/VinayMayavanshi13" target="_blank">
      <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
