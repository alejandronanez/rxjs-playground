/* eslint-disable no-console */
import Rx from 'rxjs';

const simple$ = new Rx.Observable(observer => {
	console.log('Generating Observable');

	setTimeout(() => {
		observer.next('An Item!');

		setTimeout(() => {
			observer.next('Another Item');
			observer.complete();
		}, 1000);

	}, 1000);
});

simple$.subscribe(
	item => console.log(`On subscribe: one.next ${item}`),
	error => console.log(`On subscribe: one.error ${error}`),
	() => console.log('On subscribe: one.complete')
);

/* eslint-enable no-console */
