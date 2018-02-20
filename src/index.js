function pipe(...fns) {
	return function(result) {
		for (var i = 0; i < fns.length; i++) {
			result = fns[i](result);
		}
		return result;
	};
}
function compose(...fns) {
	return pipe(...fns.reverse());
}
function unary(fn) {
	return function one(arg) {
		return fn(arg);
	};
}
function binary(fn) {
	return function two(arg1, arg2) {
		return fn(arg1, arg2);
	};
}
function partial(fn, ...firstArgs) {
	return function applied(...lastArgs) {
		return fn(...firstArgs, ...lastArgs);
	};
}
function trampoline(fn) {
	return function trampolined(...args) {
		var result = fn(...args);
		while (typeof result == 'function') {
			result = result();
		}
		return result;
	};
}
module.exports = {
	pipe,
	compose,
	unary,
	binary,
	partial,
	trampoline
};
