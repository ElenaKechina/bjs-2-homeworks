function cachingDecoratorNew(func) {
  const cash = [];
  return function (...args) {
    const key = args.join(',');
    const index = cash.findIndex((elem) => !!elem[key]);
    if (~index) {
      console.log('cash');
      return 'Из кэша: ' + cash[index][key];
    } else {
      console.log('work');
      const obj = {};
      obj[key] = func.call(this, ...args);
      cash.push(obj);

      if (cash.length > 5) {
        cash.shift();
      }

      return 'Вычисляем: ' + obj[key];
    }
  };
}

function debounceDecoratorNew(func, delay) {
  let timerId;
  let isFirst = true;

  return function (...args) {
    if (isFirst) {
      isFirst = false;
      return func.call(this, ...args);
    }
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function debounceDecorator2(func, delay) {
  let timerId;
  let isFirst = true;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++;
    if (isFirst) {
      isFirst = false;
      return func.call(this, ...args);
    }
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
  return wrapper;
}

const sendSignal2 = () => console.log('Сигнал послан');
const upgradedSendSignal2 = debounceDecorator2(sendSignal2, 2000);
setTimeout(upgradedSendSignal2());
setTimeout(upgradedSendSignal2(), 300);
setTimeout(upgradedSendSignal2(), 900);
setTimeout(upgradedSendSignal2(), 1200);
setTimeout(upgradedSendSignal2(), 2300);
setTimeout(upgradedSendSignal2(), 4400);
setTimeout(upgradedSendSignal2(), 4500);
setTimeout(() => {
  console.log(upgradedSendSignal2.count);
}, 4700);
