import EventEmitter from "events";

("CREATING CLASS WITH EXTEND EventEmitter");
class MyEmitter extends EventEmitter {}

("INITIALIZING MyEmitter CLASS");
const myEmitter = new MyEmitter();

("EXAMPLE 1");
// ("REGISTER EVENT LISTNER");
// myEmitter.on("my_event", () => {
//   console.log("An Event Occured....");
// });
// ("IF YOU CAN'T TRIGGER EVENT IT CAN'T RUN");
// ("TRIGGER EVENT");
// myEmitter.emit("my_event");
// myEmitter.emit("my_event");
// myEmitter.emit("my_event");

("EXAMPLE 2");
// ("REGISTER EVENT LISTNER");
// let m = 0;
// myEmitter.on("my_event", () => {
//   console.log(++m);
// });
// ("IF YOU CAN'T TRIGGER EVENT IT CAN'T RUN");
// ("TRIGGER EVENT");
// myEmitter.emit("my_event");
// myEmitter.emit("my_event");

("EXAMPLE 3");
("REGISTER EVENT LISTNER");
let m = 0;
myEmitter.once("my_event", () => {
  console.log("ONCE EVENT TRIGGER ....");
});
("IF YOU CAN'T TRIGGER EVENT IT CAN'T RUN");
("TRIGGER EVENT");
myEmitter.emit("my_event");
myEmitter.emit("my_event");
