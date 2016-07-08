
import Rx from 'rxjs';

const error$ = new Rx.Observable(observer => {
	observer.error(new Error('My Error Message'));
});

error$.subscribe(
	item => console.log(item),
	error => console.log(`Error: ${error.stack}`)
);
