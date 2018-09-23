Lifecycle Example
======================



getDerivedStateFromProps()
---------------------------------


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

static getDerivedStateFromProps(nextProps, prevState){
	if (prevState.value !== nextProps.value) {
		return {
			value: nextProps.value
		}
	}
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~