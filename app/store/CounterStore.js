import { action, makeAutoObservable, observable } from "mobx";

class CounterStore{
  count = 0;
  constructor(){
    makeAutoObservable(this,{
      count:observable,
      increment:action,
      decrement:action
    })
  }
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

const counterStore = new CounterStore();
export default counterStore;