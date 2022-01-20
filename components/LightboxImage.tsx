import Image, { ImageProps } from 'next/image';
import * as React from 'react';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

export function LightBoxImage(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Image
        alt={props.alt}
        className="rounded-lg overflow-hidden "
        {...props}
        onClick={() => setOpen(true)}
      />
      {open && (
        <Lightbox mainSrc={props.src} onCloseRequest={() => setOpen(false)} />
      )}
    </>
  );
}
