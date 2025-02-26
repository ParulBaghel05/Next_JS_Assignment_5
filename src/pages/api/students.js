import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.resolve(process.cwd(), 'data.json');
    const data = readFileSync(filePath);
    const jsonData = JSON.parse(data);
    res.status(200).json(jsonData.students);
}
