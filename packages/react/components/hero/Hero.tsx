import React from "react";
import {HeroProps} from "./HeroProps";
import {has, is} from "../../services/classify";
import {getAlignClassName, getVariantClassName} from "../../objects";
import clsx from "clsx";
import {hashClass} from "../../helpers";
import {useTrilogyContext} from "../../context";

/**
 * Hero Component
 * @param children {React.ReactNode} Hero Children
 * @param backgroundSrc {string} If source, it will display background option
 * @param variant {VariantState} Hero background color : primary|secondary|tertiary
 * @param onClick {Function} onClick Event
 * @param overlap {ReactNode[]|Boolean} Hero overlap components in tab (need to add key for each element),
 * if second element add second special overlap (only native-old) - Web (Boolean) Native (ReactNode)
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param backgroundHeight {BackgroundHeight} Background heigth
 */
const Hero = ({
  children,
  className,
  backgroundSrc,
  align,
  justify,
  variant,
  onClick,
  overlap,
  ...others
}: HeroProps): JSX.Element => {
  const { styled } = useTrilogyContext();

  const classes = hashClass(
    styled,
    clsx(
      "hero",
      variant && has(`background-${getVariantClassName(variant)}`),
      backgroundSrc && [is("main"), has("background")],
      align && is(getAlignClassName(align)),
      justify && is(justify),
      overlap && is("overlapped"),
      className
    )
  );

  if (variant) {
    return (
      <section onClick={onClick && onClick} className={classes} {...others}>
        <div className={hashClass(styled, clsx("hero-body"))}>{children}</div>
      </section>
    );
  }

  return (
    <section
      onClick={onClick && onClick}
      {...(backgroundSrc && {
        style: { backgroundImage: `url(${backgroundSrc})` },
      })}
      className={classes}
      {...others}
    >
      <div className={hashClass(styled, clsx("hero-body"))}>{children}</div>
    </section>
  );
};

export default Hero;
