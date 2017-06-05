import React from 'react';

const RootContainer = (props) => ((
	<div>
		THIS IS ROOT CONTAINER
		{
			props.children && React.cloneElement(props.children)
		}
	</div>
))

export default RootContainer