import React from 'react'

function Age({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}


export default React.memo(Age)
