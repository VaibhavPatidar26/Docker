import express from "express";
const app = express();
app.get("/", function (req, res) {
    res.send({
        message: "docker_start"
    });
});
app.listen(3000, (() => {
    console.log("server started");
}));
//# sourceMappingURL=index.js.map