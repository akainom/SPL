interface IReport
{
    title:string;
    content:string;
    generate():string|object;
}
class HTMLReport implements IReport
{
    title: string;
    content:string;
    constructor(title:string,content:string)
    {
        this.title = title;
        this.content = content;
    }
    generate():string
    {
        return `<h1>${this.title}</h1><p>${this.content}</p>`
    }
}
class JSONReport implements IReport
{
    title:string;
    content:string;
    constructor(title:string,content:string)
    {
        this.title = title;
        this.content = content;
    }
    generate():object
    {
        return {title: this.title, content: this.content};
    }
}
const report1 = new HTMLReport("отчет номер 1","содержание отчета 1");
console.log(report1.generate());
const report2 = new JSONReport("отчет номер 2","содержание отчета номер 2");
console.log(report2.generate());
