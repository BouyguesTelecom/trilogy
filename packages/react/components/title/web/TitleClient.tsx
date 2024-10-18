'use client'
import clsx from 'clsx'
import React, { forwardRef, LegacyRef, memo, useEffect, useState } from 'react'

import { TitleProps } from '@/components/title/TitleProps'
import TitleBase from '@/components/title/web/TitleBase'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

const TitleClient = ({ skeleton, ...others }: TitleProps, ref?: LegacyRef<any>): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx(isLoading ? is('loading') : is('loaded')))

  const onClick = () => {
    alert('Je suis CSR. et toi ? :)')
  }

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  return <TitleBase {...others} styled={styled} className={classes} ref={ref} onClick={onClick} />
}

export default memo(forwardRef(TitleClient))
