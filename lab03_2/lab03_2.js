var HTMLReport = /** @class */ (function () {
    function HTMLReport(title, content) {
        this.title = title;
        this.content = content;
    }
    HTMLReport.prototype.generate = function () {
        return "<h1>".concat(this.title, "</h1><p>").concat(this.content, "</p>");
    };
    return HTMLReport;
}());
var JSONReport = /** @class */ (function () {
    function JSONReport(title, content) {
        this.title = title;
        this.content = content;
    }
    JSONReport.prototype.generate = function () {
        return { title: this.title, content: this.content };
    };
    return JSONReport;
}());
var report1 = new HTMLReport("отчет номер 1", "содержание отчета 1");
console.log(report1.generate());
var report2 = new JSONReport("отчет номер 2", "содержание отчета номер 2");
console.log(report2.generate());
