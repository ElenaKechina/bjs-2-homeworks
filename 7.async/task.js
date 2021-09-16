class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error('Не задан id');
    }

    if (this.alarmCollection.find((alarm) => id === alarm.id)) {
      console.error('Такой звонок уже есть');
      return;
    }

    this.alarmCollection.push({ id, time, callback });
  }

  removeClock(id) {
    const index = this.alarmCollection.findIndex((alarm) => alarm.id === id);
    return !!this.alarmCollection.splice(index, 1);
  }

  getCurrentFormattedTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return hours + ':' + minutes;
  }

  checkClock(alarm) {
    if (alarm.time === this.getCurrentFormattedTime()) {
      alarm.callback();
    }
  }

  start() {
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((alarm) => {
          this.checkClock(alarm);
        });
      }, 1000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((alarm) => {
      console.log(`id = ${alarm.id}, time = ${alarm.time}`);
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

testCase = () => {
  const alarms = new AlarmClock();

  const timeMinutesAdd = (minute) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + minute);

    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return hours + ':' + minutes;
  };

  alarms.addClock(
    timeMinutesAdd(0),
    () => {
      console.log('Дзынь-Дзынь');
    },
    1
  );

  alarms.addClock(
    timeMinutesAdd(0),
    () => {
      console.log('Дзынь-Дзынь');
    },
    1
  );

  alarms.addClock(
    timeMinutesAdd(1),
    () => {
      console.log('Бзынь-Бзынь');
      alarms.removeClock(2);
    },
    2
  );

  alarms.addClock(
    timeMinutesAdd(2),
    () => {
      console.log('Взынь-Взынь');
      alarms.stop();
      alarms.clearAlarms();
      alarms.printAlarms();
    },
    3
  );

  alarms.printAlarms();
  alarms.start();
};

testCase();
