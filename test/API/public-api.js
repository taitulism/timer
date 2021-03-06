const {
	Timer,
	THREE_SECONDS,
} = require('../common');

describe('Public API', () => {
	let timer;

	beforeEach(() => {
		timer = new Timer(THREE_SECONDS);
	});

	afterEach(() => {
		timer.destroy();
	});

	test('has a method .set()', () => {
		expect(typeof timer.set).toEqual('function');
	});

	test('has a method .whenDone()', () => {
		expect(typeof timer.whenDone).toEqual('function');
	});

	test('has a method .onTick()', () => {
		expect(typeof timer.onTick).toEqual('function');
	});

	test('has a method .start()', () => {
		expect(typeof timer.start).toEqual('function');
	});

	test('has a method .getTimeLeft()', () => {
		expect(typeof timer.getTimeLeft).toEqual('function');
	});

	test('has a method .stop()', () => {
		expect(typeof timer.stop).toEqual('function');
	});

	test('has a method .reset()', () => {
		expect(typeof timer.reset).toEqual('function');
	});

	test('has a method .destroy()', () => {
		expect(typeof timer.destroy).toEqual('function');
	});
});
