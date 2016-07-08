
import Rx from 'rxjs';

import { createSubscriber } from 'helpers';

function createInterval(time) {
	return new Rx.Observable(observer => {
		let index = 0;
		setInterval(() => {
			observer.next(index++);
		}, time);
	});
}

const everySecond$ = createInterval(1000);
everySecond$.subscribe(createSubscriber('everySecond$'));
