import React from 'react'

const LayoutContext = React.createContext({
	isChatExpanded: true,
	setIsChatExpanded: () => {},
})

export default LayoutContext
