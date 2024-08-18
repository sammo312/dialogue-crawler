import React, { createContext, useContext, useReducer } from 'react'

const TextCrawlContext = createContext()
TextCrawlContext.displayName = 'TextCrawlContext';

export const useTextCrawl = () => {
  return useContext(TextCrawlContext)
}
export const TextCrawlContextProvider = ({ children, initialState, reducer }) => {
  const [textCrawlState,textCrawlDispatch ] = useReducer(reducer, initialState)
  return (
    <TextCrawlContext.Provider value={[textCrawlState, textCrawlDispatch]}>
      {children}
    </TextCrawlContext.Provider>
  )
}
