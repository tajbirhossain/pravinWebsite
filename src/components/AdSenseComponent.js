import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AdSenseComponent = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5367052086365687" crossorigin="anonymous"></script>
      </Helmet>
      <ins className="adsbygoogle"
           style={{display: 'block'}}
           data-ad-format="autorelaxed"
           data-ad-client="ca-pub-5367052086365687"
           data-ad-slot="6002144755"></ins>
    </div>
  );
};

export default AdSenseComponent;
