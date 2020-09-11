export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const isServer = () => typeof window === 'undefined';
export const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const loadScript = async ({
  src, integrity, instanceTest, async = true, defer = false, crossOrigin = 'anonymous',
}) => {
  if (isServer()) return;
  return new Promise((resolve) => {
    // Mas eh bom colocar um test na chamada de loadScript() – ex.: !window.fabric
    if (instanceTest) {
      console.warn('obj já carregado');
      return resolve();
    }
    const tag = document.createElement('script');
    tag.src = src;
    if (integrity) {
      tag.integrity = integrity;
    }
    tag.async = async;
    tag.defer = defer;
    tag.crossOrigin = crossOrigin;
    document.body.appendChild(tag);
    tag.onload = () => resolve();
  });
};

export const milliToPixel = ({ width, height }) => {
  const pixel = 3.7795275591;
  return {
    width: width * pixel,
    height: height * pixel,
  };
};
