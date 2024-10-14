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
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'tabs',
      fullwidth && is('fullwidth'),
      marginless && is('marginless'),
      className,
    ),
  )

  return (
    <Tag className={classes}>{children}</Tag>
  );
};

export default Tabs;
