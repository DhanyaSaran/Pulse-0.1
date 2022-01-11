import React from 'react'
import Typography from '../../../../components/lib/typography/typography';

import "../styles/footer.scss";

const Footer = () => {
  return (
    <div>
      <Typography color="textSecondary" className="footer">
        &copy; Copyright 2021 Episilla all right reserved
      </Typography>
    </div>
  )
}

export default Footer;
