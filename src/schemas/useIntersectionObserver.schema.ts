import { RefObject } from 'react';

/**
 * @interface IuseIntersectionObserver
 */
export interface IuseIntersectionObserver {
  idlecallBackTimeout?: number;

  /**
   * **root**  : we calculate intersection or visibility w.r.t root element ( default **viewport**)
   */
  root?: HTMLElement | null;
  /**
   * **threshold** : number or Array of numbers between 0 and 1 ( default 0)
   */
  threshold?: number | Array<number>;
  /**
   * **margin** : margin of the root element ( works same as css margin) default ('0px')
   */
  rootMargin?: string;

  /**
   * **currentRef** : current Element of interest reference.
   * you could create refs using useRef reactHook.
   */
  currentRef: RefObject<HTMLElement>;

  /**
   * **onTrigger** : trigger handler to be run when intersection observer triggers event.
   */
  onTrigger?: (entries: IntersectionObserverEntry[]) => void;
}
