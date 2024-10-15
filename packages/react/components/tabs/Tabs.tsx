import React from 'react';
import { TabsMarkup, TabsMarkupValues, TabsProps } from './TabsProps';
import { useTrilogyContext } from '@/context';
import { hashClass } from '@/helpers';
import clsx from 'clsx';
import { is } from '@/services';

const isCorrectMarkup = (stringMarkup: TabsMarkup | TabsMarkupValues) => {
  return stringMarkup in TabsMarkup || Object.values(TabsMarkup).includes(stringMarkup as TabsMarkup)
}

/**
 * Tabs Component
 * @param children {ReactChild} React Child Element
 * @param markup {TabsMarkup | TabsMarkupValues} markup of the tabs
 * @param fullwidth {boolean} fullwidth tabs
 * @param className {string} Additionnal CSS Classes
 * @param marginless {boolean} marginless tabs
 * @param justify {string} justify tabs
 * @param textAlign {string} text align tabs
 */
const Tabs = ({ children, markup, fullwidth, className, marginless, justify, textAlign }: TabsProps) => {

  const Tag = markup && isCorrectMarkup(markup) ? markup : 'div'
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'tabs',
      fullwidth && is('fullwidth'),
      marginless && is('marginless'),
      textAlign && textAlign,
      justify && is(justify),
      className,
    ),
  )

  return (
    <Tag className={classes}>{children}</Tag>
  );
};

export default Tabs;
