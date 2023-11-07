const server = required("express")();

server.get("/", (req, res) => {
    res.sendFile(path.resolve("./public"))
})

server.post("/login", (req, res) => {
    res.sendFile(path.resolve("../src/Routes/login"));
})

let userAllowed = {
    email: "juan@gmail.com",
    password: "123",
}
server.post("/login", (req, res) => {
    if(userAllowed.email == req.body.username && userAllowed.password){
        res.send("Welcome Juan");
    return;
  }
  res.send("Invalid user");
})

server.listen(3000, () => {
    console.log(`server ON port: ${"300"}`)
})