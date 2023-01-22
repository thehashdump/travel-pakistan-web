function AppRoute({ component: Component, ...props }) {
	document.title = props.title;

	return <Component {...props} />;
}

export { AppRoute };
