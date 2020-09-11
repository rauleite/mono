import React, {
  useRef, useEffect,
} from 'react';

import Button from '@rauleite/components/Button';
import useFabric from './useFabric';

import { constants } from '../../src/utils/screen';
import { aspectRatio } from '../../src/utils/card';

/**
 * Componentes como Web Elements, sempre devem ser importados dinamicamente:
 * ```
  const CardBusiness = dynamic(
    () => import('./CardBusiness'),
    { ssr: false },
  );
  ```
 */
const CardBusiness = () => {
  const divRef = useRef();
  const canvasRef = useRef();
  const area = aspectRatio({
    width: document.documentElement.offsetWidth,
    desconto: (constants.DRAWER_WIDTH + 24) * 2,
  });

  const canvasSize = ({ width, height }) => {
    if (canvasRef.current) {
      canvasRef.current.setWidth(width);
      canvasRef.current.setHeight(height);
    }
  };

  const fabricRef = useFabric((fabricCanvas) => {
    console.group('fabricRef ->', 'useFabric');
    // inicializa referencia
    canvasRef.current = fabricCanvas;
    // inicializa considerando tamanho window

    // canvasSize(aspectRatio({
    //   width: document.documentElement.offsetWidth,
    //   desconto: (constants.DRAWER_WIDTH + 24) * 2,
    // }));
    console.groupEnd();
  });

  // Mount 2
  useEffect(() => {
    console.group('useEffect()');
    console.groupEnd();

    const interval = setInterval(() => {
      // console.group('setInterval()');

      if (divRef.current && canvasRef.current) {
        const divWidth = divRef.current.offsetWidth;
        const canvasWidth = canvasRef.current.getWidth();

        if (divWidth !== canvasWidth) {
          canvasSize(aspectRatio({ width: divWidth }));
        }
      }

      // console.groupEnd();
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        width: '100%',
        height: '100%',
        // width: area.width,
        // height: area.height,
        border: '1px solid red',

        margin: 0,
        // border: 0,
        overflow: 'hidden', /*  Disable scrollbars */
        display: 'block', /* No floating content on sides */
      }}
    >
      <>
        <Button />
        <canvas
          ref={fabricRef}
          width={area.width}
          height={area.height}
          style={{
          // border: '1px solid red', position: 'absolute', left: 0, top: 0,
            position: 'absolute',
            left: 0,
            top: 0,
            // border: '1px solid red',
            // width: area.width,

            // height: area.height,
          }}
        >
          Desculpe, seu navegador não suporta esse recurso.

        </canvas>
      </>
    </div>
  );
};

export default CardBusiness;
