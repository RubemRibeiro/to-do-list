const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.title == undefined) return res.status(400).json({ message: "Title is required" });

    if (body.title == '') return  res.status(400).json({ message: "Title cannot be empty" });

    next();

};

const validateStatus = (req, res, next) => {
    const { body } = req;

    if (body.status == undefined) return res.status(400).json({ message: "Status is required" });

    if (body.status == '') return  res.status(400).json({ message: "Status cannot be empty" });

    next();

};

export default {
    validateBody,
    validateStatus
}