var { Tasks } = require("./models");


const create_task = async (request, response) => {
    var task = request.body;
    await Tasks.create(task);  //sending task directly from body
    response.json({ status: "Task created" });
}

const read_task = async (request, response) => {
    var tasks = await Tasks.find();
    response.json({ data: tasks });
}

const update_task = async (request, response) => {
    var _id = request.query.id;
    var task = request.body;
    await Tasks.findByIdAndUpdate(_id, task);

    response.json({ status: "Task updated" });
}

const delete_task = async (request, response) => {
    var _id = request.query.id;
    var task = request.body;
    await Tasks.findByIdAndDelete(_id, task);
    response.json({ status: "Task deleted" });
}

module.exports = { create_task, read_task, update_task, delete_task };