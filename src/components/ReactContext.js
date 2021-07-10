import React from 'react'

const ReactContext=React.createContext()
const ProdProvider=ReactContext.Provider
const ProdConsumer=ReactContext.Consumer

export{ProdProvider,ProdConsumer}

export default ReactContext