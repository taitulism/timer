const {
	HALF_A_SECOND,
	memoize
} = require('./common');

const convertTicksToDuration = memoize((ticksLeft) => {
	return ticksLeft * HALF_A_SECOND;
});

const convertDurationToTicks = memoize((duration) => {
	return duration / HALF_A_SECOND;
});

/*
 * Private method. Called with a Timer instance as context of `this`.
 */
function tickHandler () {
	const timeLeft = convertTicksToDuration(this.ticksLeft);

	this.tickFn && this.tickFn(this.isBigTick, timeLeft);

	this.isBigTick = !this.isBigTick;
	this.ticksLeft--;

	if (this.ticksLeft < 0) {
		end(this);
	}
}

function end (timer) {
	timer.stop();
	timer.reset();
	timer.done && timer.done();
}

function hasTicksLeft (timer) {
	return timer.ticksLeft && timer.ticksLeft >= 0;
}

module.exports = {
	tickHandler,
	hasTicksLeft,
	convertDurationToTicks,
	convertTicksToDuration,
};
