class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        try {
            if (!time || !callback)
                throw new Error('Отсутствуют обязательные аргументы')
        } catch (error) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        if (time in this.alarmCollection) {
            this.callback = callback;
            this.time = time;
            this.canCall = true;
        } else {
            console.warn('Уже присутствует звонок на это же время')
        }


    }
    removeClock(time) {
        let needDelete = time;
        this.alarmCollection = this.alarmCollection.filter((number) => number !== needDelete)
    }
    getCurrentFormattedTime() {
        return this.time
    }
    start() {
        if (intervalId != undefined) {
            return
        }
        let intervalId = setInterval(() => {
            this.alarmCollection.forEach(() => {
                if (this.canCall) {
                    this.canCall = false;
                } else {
                    this.canCall = true
                }
            })
        }, 1000)
    }

    stop() {
        this.clearInterval()
        this.intervalId = null;
    }
    resetAllCalls(){
        this.alarmCollection.forEach(() => this.canCall = true)
    }
    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }
}