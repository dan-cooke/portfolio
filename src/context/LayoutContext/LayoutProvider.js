import React, { useContext, useState } from 'react'
import LayoutContext from './LayoutContext'

const LayoutProvider = ({ children }) => {
	const [isChatExpanded, setIsChatExpanded] = useState(true)

	return (
		<LayoutContext.Provider
			value={{
				isChatExpanded,
				setIsChatExpanded,
			}}
		>
			{children}
		</LayoutContext.Provider>
	)
}

export default LayoutProvider
