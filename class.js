class student{
    constructor(studentId,name,home){
        this.id=studentId;
        this.studentName=name;
        this.homeTown=home;
        this.school="motijheel model"
    }
}
const student1=new student(2,"kolim","laxmipur");
const student2=new student(2,"raju","ctg");


console.log(student1,student2);