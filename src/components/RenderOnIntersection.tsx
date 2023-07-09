import React, { useRef } from "react";

import { useRenderOnIntersection } from "../hooks";
import { IRenderOnIntersectionProps } from "../schemas";

/**
 *
 * It's a skeleton component that wraps user defined components inside and toggles visibility based on intersection with root
 *
 */
export const RenderOnIntersection = ({
  alwaysShow = false,
  defaultHeight = 100,
  defaultWidth = 100,
  threshold = 0,
  rootMargin = "100px",
  idlecallBackTimeout = 100,
  root = null,
  parentElement: ParentElement = "div",
  parentClassName,
  skeletonElement: SkeletonElement = "div",
  skeletonClassName,
  children,
}: IRenderOnIntersectionProps) => {
  const currentRef = useRef<HTMLElement>(null);
  const {
    isVisible,
    height: elementHeight,
    width: elementWidth,
  } = useRenderOnIntersection({
    root,
    rootMargin,
    currentRef,
    threshold,
    defaultHeight,
    defaultWidth,
    alwaysShow,
    idlecallBackTimeout,
  });

  const renderChild = isVisible || alwaysShow;
  return (
    <ParentElement className={parentClassName} ref={currentRef}>
      {renderChild && children}
      {!renderChild && (
        <SkeletonElement
          style={{ height: elementHeight, width: elementWidth }}
          className={skeletonClassName}
        ></SkeletonElement>
      )}
    </ParentElement>
  );
};
