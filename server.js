//import app from app.js
import app from "./app.js";
//setting the port to the .env or 7777 if not found
const port = process.env.PORT ?? 7777;

//sett up app.listen to the port
app.listen(port, () => {
  console.log(`Server is now listening on http://localhost:${port}`);
});
