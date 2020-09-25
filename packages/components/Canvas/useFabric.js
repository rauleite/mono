import { useRef, useCallback } from 'react';
// import { loadScript } from '../../src/utils';
import { loadScript } from '@rauleite/utils/utils';

const useFabric = (onChange) => {
  const fabricRef = useRef();
  const disposeRef = useRef();

  return useCallback(async (node) => {
    if (!window.fabric) {
      await loadScript({
        src: 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.1.0/fabric.min.js',
        integrity: 'sha512-T9uV3LxV54oKVYSwORGeHdJ1Ti0WcQvDjAaTvMS6+qfrI5ZRzwxfXVzr7fqodTjfZ6wtbreT5A+65ykwbp4DOw==',
        instanceTest: window.fabric,
      });
    }

    if (node) {
      fabricRef.current = new fabric.Canvas(node);
      if (onChange) {
        disposeRef.current = onChange(fabricRef.current);
      }
    } else if (fabricRef.current) {
      fabricRef.current.dispose();
      if (disposeRef.current) {
        disposeRef.current();
        disposeRef.current = undefined;
      }
    }
  }, []);
};

export default useFabric;
