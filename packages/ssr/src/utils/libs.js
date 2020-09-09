export const fabricLoaded = (cb) => {
  const interval = setInterval(() => {
    console.log('fabricLoaded -> fabric', fabric);
    if (fabric) {
      cb(fabric);
      clearInterval(interval);
    }
  }, 50);
};
