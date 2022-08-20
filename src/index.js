import app from "./app";
import { executeStudentCrudOperations } from "./controllers/methods.controller";

const main = () => {
    app.listen(app.get("port"));
    console.log("Server running");
 
}

main();
// executeStudentCrudOperations();