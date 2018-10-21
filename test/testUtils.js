import checkPropTypes from 'check-prop-types';

// finds the element by data-test attribute
export const findByAttr = (wrapper, attr) => {
	return wrapper.find(`[data-test='${attr}']`);
}

// check if props passed to component produces any error
export const checkProps = (componentPropTypes, testProps, componentProp) => {
	return checkPropTypes(componentPropTypes, testProps, 'prop', componentProp);
}