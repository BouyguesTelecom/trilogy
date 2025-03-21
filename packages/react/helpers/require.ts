import React from "react";

export const isRequiredChild = (children: React.ReactNode) => React.Children.toArray(children).some(
  (child) => React.isValidElement(child) && child.props.required
)
