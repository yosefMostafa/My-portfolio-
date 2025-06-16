import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>© {year} dunks1980.com — I have worked on a wide range of front‑end projects, from DJ applications to eCommerce booking platforms, with a focus on creating clean, well‑crafted ...</p>
    </footer>
  );
}
