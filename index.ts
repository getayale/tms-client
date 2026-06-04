import { parseStudent } from "./models/student.model.js";

console.log(
    parseStudent({
        id: "STU-001",
        name: "Getayalew Teshale"
    })
);

console.log(
    parseStudent({
        id: 42,
        name: "Test"
    })
);