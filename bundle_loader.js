export const bundleVersion = () => {
	return new Proxy({
		$element: $(`<div id="bundleVersion">v${window.BUNDLE_VERSION}</div>`),
		allowedMethods: ['insertBefore', 'insertAfter', 'prependTo', 'appendTo']
	}, {
		get(target, prop) {
			if (!target.allowedMethods.includes(prop)) return;
			return ($target) => target.$element[prop]($target);
		}
	});
};