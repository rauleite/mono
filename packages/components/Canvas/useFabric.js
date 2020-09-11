import { useRef, useCallback } from 'react';
// import { loadScript } from '../../src/utils';
import { loadScript } from '@rauleite/utils/utils';

const useFabric = (onChange) => {
  const fabricRef = useRef();
  const disposeRef = useRef();

  return useCallback(async (node) => {
    if (!window.fabric) {
      await loadScript({
        src: 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.0.0-rc.1/fabric.min.js',
        integrity: 'sha512-rKF82ziMDgkkUwTBlsQhy6Dzdyydg5ikvL1zueWJ6SQxzXaqPY85rEiRvJymMI5YiQqyvm0+mlVYb5tLjmslQA==',
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
