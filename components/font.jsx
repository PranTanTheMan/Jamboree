import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
    font-family: 'Neue Metana';
    src: url('/public/fonts/NeueMetanaNext-SemiBold.otf') format('opentype');
    font-style: normal;
    font-display: swap;
    font-weight: 300 800
}

@font-face {
  font-family: 'Neue Metana';
  src: url('/public/fonts/NeueMetanaNextOutline-Black.otf') format('opentype');
  font-style: normal;
  font-display: swap;
  font-weight: 300 800;
}
      `}
  />
);

export default Fonts;
