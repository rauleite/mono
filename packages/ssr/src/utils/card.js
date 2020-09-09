import { milliToPixel } from '.';

const cardBusinessMilli = {
  width: 89,
  height: 51,
};

const cardBusinessPx = milliToPixel(cardBusinessMilli);

export const types = Object.freeze({
  cardBusiness: {
    aspectRatio: 1.75,
    size: {
      widthMilli: cardBusinessMilli.width,
      heightMilli: cardBusinessMilli.height,
      width: cardBusinessPx.width,
      height: cardBusinessPx.height,
    },
  },
});

export const aspectRatio = ({
  width,
  aspect = types.cardBusiness.aspectRatio,
  desconto = 0,
}) => {
  const widthComDesconto = width - desconto;
  const result = {
    width: widthComDesconto,
    height: widthComDesconto / aspect,
  };
  // console.log('aspectRatio -> return', result);
  return result;
};
