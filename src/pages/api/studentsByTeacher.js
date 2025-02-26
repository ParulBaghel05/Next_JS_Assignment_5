import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { teacherId } = req.query;
    const filePath = path.resolve(process.cwd(), 'data.json');
    const data = readFileSync(filePath);
    const jsonData = JSON.parse(data);
    const studentsByTeacher = jsonData.students.filter(student => student.teacherId === parseInt(teacherId));
    res.status(200).json(studentsByTeacher);
}
