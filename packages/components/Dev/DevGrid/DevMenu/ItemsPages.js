import React from 'react';
import { useRouter } from 'next/router';
import MenuItem from '@material-ui/core/MenuItem';
import { isServer } from '@rauleite/utils/utils';
import pages from '../../pages';

// https://stackoverflow.com/a/56309771 – forwardRef
const ItemsPages = React.forwardRef((props, ref) => {
  const router = useRouter();

  const handleClick = (href) => {
    const isBack = href === 'back';
    const isSamePage = href === window.location.pathname;
    if (isBack) {
      router.back();
      return;
    }
    if (isSamePage) {
      return;
    }
    router.push(href);
  };

  return (
    <div
      ref={ref}
    >
      {pages.map((page) => (
        <MenuItem
          key={page.url}
          onClick={() => handleClick(page.url)}
        >
          {page.label}
        </MenuItem>
      ))}
    </div>
  );
});

export default ItemsPages;
