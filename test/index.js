const assert = require('assert');
const FP = require('../src/index');
const f1 = (item) => {
	return item + 1;
};
const f2 = (item) => {
	return item + 2;
};
const f3 = (item) => {
	return item + 3;
};
describe('Compose', () => {
	it('should return 4', () => {
		assert.equal(FP.compose(f3, f2, f1)(1), 7);
	});
});
describe('Pipe', () => {
	it('should return 4', () => {
		assert.equal(FP.pipe(f1, f2, f3)(1), 7);
	});
});
describe('Compose and Pipe together', () => {
	it('should return true', () => {
		assert.equal(FP.compose(f1, f2, f3)(2), FP.pipe(f3, f2, f1)(2), 7);
	});
});
describe('Unary', () => {
	it('should allow only 1 argument', () => {
		//test params to make sure they do not allow more than one argument
		assert.equal(FP.unary((one, two) => {}).length, 1);
	});
});
describe('Binary', () => {
	it('should allow only 2 arguments', () => {
		//test params to make sure they do not allow more than two arguments
		assert.equal(FP.binary((one, two, three) => {}).length, 2);
	});
});
describe('Partial', () => {
	it('should return 12', () => {
		assert.equal(
			FP.partial(function(x, y) {
				return x + y;
			}, 10)(2),
			12
		);
	});
});
describe('Trampoline', () => {
	it('should return 15', () => {
		assert.equal(
			FP.trampoline(function f(sum, num, ...nums) {
				sum += num;
				if (nums.length == 0) return sum;
				return function() {
					return f(sum, ...nums);
				};
			})(1, 2, 3, 4, 5),
			15
		);
	});
});