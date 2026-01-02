import clsx from "clsx";

export const buildClassLink = ({ isActive, css }) => {
  return clsx(css.link, isActive && css.active);
};
