import { IuseIntersectionObserver } from "./useIntersectionObserver.schema";

export interface IuseRenderOnIntersection
  extends Omit<IuseIntersectionObserver, "onTrigger"> {
  /**
   * **alwaysShow** : always renders in dom when true. ( default false )
   */
  alwaysShow?: boolean;
  /**
   * **defaultHeight** : initialHeight of the Element ( give a rough estimation). ( default 100 )
   */
  defaultHeight?: number | string;
  /**
   * **defaultWidth** : initialWidth of the Element ( rough estimation ). (default 100)
   */
  defaultWidth?: number | string;
  /**
   * **idlecallBackTimeout**  : idlecallBackTimeout for state updation in ms (default 100)
   */
}
