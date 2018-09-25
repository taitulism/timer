const START_TICK = 1;
const HALF_A_SECOND = 500;

/*
 * Private method. Called with a Timer instance as context of `this`.
 */
function tickHandler () {
	const timeLeft = getTimeLeft(this.ticksLeft);

	this.tickFn && this.tickFn(this.isBigTick, timeLeft);

	this.isBigTick = !this.isBigTick;
	this.ticksLeft--;

	if (this.ticksLeft <= 0) {
		end(this);
	}
}

function end (timer) {
	timer.stop();
	timer.reset();
	timer.done && timer.done();
}

function getTimeLeft (ticksLeft) {
	return (ticksLeft - START_TICK) * HALF_A_SECOND;
}

function convertDurationToTicks (duration) {
	return (duration / HALF_A_SECOND) + START_TICK;
}

function hasTicksLeft (timer) {
	return timer.ticksLeft && timer.ticksLeft >= 0;
}

function memoize (fn) {
	const memo = Object.create(null);

	return function memoFn (...args) {
		if (!memo[args]) {
			memo[args] = fn(args);
		}

		return memo[args];
	};
}

module.exports = {
	tickHandler,
	hasTicksLeft,
	convertDurationToTicks: memoize(convertDurationToTicks),
};
