import React from 'react';
import NextLink from 'next/link';

function LinkWrap({ children, refAs, ...props }, ref) {
  if (refAs) {
    props[refAs] = ref;
  }
  return (
    <>
      {React.isValidElement(children)
        ? React.cloneElement(children, props)
        : null}
    </>
  );
}

const LinkWrapper = React.forwardRef(LinkWrap);

export default function Link({ refAs, children, ...props }) {
  return (
    <NextLink {...props}>
      <LinkWrapper refAs={refAs}>{children}</LinkWrapper>
    </NextLink>
  );
}
