import { useEffect, useRef, useState } from 'react';

import { IuseRenderOnIntersection } from '../schemas';
import { useIntersectionObserver } from './useIntersectionObserver';

/**
 *
 * @param useRenderOnIntersection
 * @returns
 * **isVisible** : if true that means element should be visible on screen else not visible.\
 * **height**: estimated height of the element to use for the placeholder.\
 * **width**: estimated width of the element to use for the placeholder.
 *
 */
export const useRenderOnIntersection = ({
  defaultHeight,
  defaultWidth,
  alwaysShow,
  currentRef,
  ...isecObserverprops
}: IuseRenderOnIntersection) => {
  // state responsible for toggling visibility of the element.
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const estimatedHeight = useRef(defaultHeight);
  const estimatedWidth = useRef(defaultWidth);

  useIntersectionObserver({
    ...isecObserverprops,
    currentRef,
    onTrigger: (entries) => {
      if (entries.length) setIsVisible(entries[0].isIntersecting);
    },
  });

  useEffect(() => {
    /** 
     * updates the skeleton dimensions ( height and width )
     for precise scrolling, once element is out of visible area.
    * */
    if (isVisible) {
      const { offsetHeight = defaultHeight, offsetWidth = defaultWidth } =
        currentRef.current || {};

      estimatedHeight.current = offsetHeight;
      estimatedWidth.current = offsetWidth;
    }
  }, [defaultHeight, isVisible, currentRef, defaultWidth]);

  return {
    isVisible: alwaysShow || isVisible,
    height: estimatedHeight.current,
    width: estimatedHeight.current,
  };
};
