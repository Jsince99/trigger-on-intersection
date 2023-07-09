import { useEffect, useRef } from "react";

import { IuseIntersectionObserver } from "../schemas";

/**
 *
 * @param useIntersectionObserver
 * it's a hook that can be used use inside any hook or react components.
 *
 */
export const useIntersectionObserver = ({
  currentRef,
  root,
  rootMargin,
  threshold,
  idlecallBackTimeout,
  onTrigger = (entries: IntersectionObserverEntry[]) => {},
}: IuseIntersectionObserver) => {
  const callBackRef = useRef<number>(-1);

  useEffect(() => {
    const tempRef = currentRef.current;

    // if the reference element is not passed, don't observe the element!
    if (!tempRef) return;

    // create IntersectionObserver and provide callback to handle the logic.
    const observer = new IntersectionObserver(
      (entries) => {
        //   if we have access to idlecallBack we use it to avoid running on main thread
        if (window.requestIdleCallback) {
          callBackRef.current = window.requestIdleCallback(
            () => onTrigger(entries),
            {
              timeout: idlecallBackTimeout,
            }
          );
        } else {
          onTrigger(entries);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(tempRef);

    // cleanUp!
    return () => {
      if (tempRef) {
        observer.unobserve(tempRef);
      }
      if (window.cancelIdleCallback)
        window.cancelIdleCallback(callBackRef.current);
    };
  }, [idlecallBackTimeout, currentRef, root, rootMargin, threshold]);
};
