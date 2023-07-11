import { IuseRenderOnIntersection } from './useRenderOnIntersection.schema';

export interface IRenderOnIntersectionProps
  extends Omit<IuseRenderOnIntersection, 'currentRef'> {
  /**
   * **parentElement** : it acts as wrapper around the component we want to render and\
   * use it's reference for checking visibilty.
   */
  parentElement?: React.ElementType;
  /**
   * **parentClassName** : parentElement className.
   */
  parentClassName?: string;
  /**
   * **skeletonElement** : it's just a skeleton or placeholder with no data.
   */
  skeletonElement?: React.ElementType;
  /**
   * **skeletonClassName** : skeletonElement className.
   */
  skeletonClassName?: string;
  /**
   * **children** : The component we would like to render once visible w.r.t parentElement.
   */
  children: React.ReactNode;
}
