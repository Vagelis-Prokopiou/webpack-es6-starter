import { add, divide } from "./functions";
let num1 = 100;
let num2 = 4;
console.log('add()', add(num1, num2));
console.log('divide()', divide(num1, num2));

// Rx example setup.
import Rx from 'rxjs/Rx';

const button = document.getElementById('button');
const clicks = Rx.Observable
    .fromEvent(button, 'click')
    .map(event => ({ isTrusted: event.isTrusted }));

const clicksSubcription = clicks
    .subscribe(value => console.log('Clicked:', value));

