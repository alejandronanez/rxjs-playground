
import Rx from 'rxjs';

import { createSubscriber } from 'helpers';

function createInterval(time) {
	return new Rx.Observable(observer => {
		let index = 0;
		const interval = setInterval(() => {
			console.log(`Generating ${index}`);
			observer.next(index++);
		}, time);

		return () => {
			// This will get called when .unsubscribe()
			cleaInterval(interval);
		};
	});
}

const everySecond$ = createInterval(1000);
// everySecond$.subscribe(createSubscriber('everySecond$')); -> Print every second in the console

// Print to the console.
const subscription = everySecond$.subscribe(createSubscriber('everySecond$'));

// Stop printing to the console after 3500ms
setTimeout(() => {
	subscription.unsubscribe();
}, 3500);
