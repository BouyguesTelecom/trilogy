import React, { useState } from 'react';
import { TabsMarkup, TabsMarkupValues, TabsProps } from './TabsProps';
import { useTrilogyContext } from '@/context';
import { hashClass } from '@/helpers';
import clsx from 'clsx';
import { is } from '@/services';

const isCorrectMarkup = (stringMarkup: TabsMarkup | TabsMarkupValues) => {
  return stringMarkup in TabsMarkup || Object.values(TabsMarkup).includes(stringMarkup as TabsMarkup)
}

const Tabs = ({ children, markup, disabled, activeIndex, fullwidth, className, marginless, inverted, align, shadowless, textAlign }: TabsProps ) => {

  const Tag = markup && isCorrectMarkup(markup) ? markup : 'div'

  const [activateIndex, setActivateIndex] = useState<number>(activeIndex || 0)
  const { styled } = useTrilogyContext()
  const [isIcons, setIsIcons] = React.useState(false)

  const classes = hashClass(
    styled,
    clsx(
      'tabs',
      fullwidth && is('fullwidth'),
      marginless && is('marginless'),
      isIcons && is('icons'),
      className,
    ),
  )

  return (
    <Tag className={classes}>{children}</Tag>
  );
};

export default Tabs;
