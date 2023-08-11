'use client'
 
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { DefaultTheme, ServerStyleSheet, StyleSheetManager } from 'styled-components'

interface StyledComponentsRegistryProps {
  children: React.ReactNode;
  theme: DefaultTheme; 
}
 
export default function StyledComponentsRegistry({ children, theme }: StyledComponentsRegistryProps) {
  
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
 
  if (typeof window !== 'undefined') return <>{children}</>
 
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}