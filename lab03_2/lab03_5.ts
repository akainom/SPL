type LogEntry = [
    date: Date,
    level: LogLevel,
    msg: string
]
    

enum LogLevel {
    INFO = "INFO", WARNING = "WARNING", ERROR = "ERROR"
}

function logEvent (event: LogEntry) {
    console.log(event[0], event[1], event[2]);
}

logEvent([new Date(), LogLevel.INFO, "message"])