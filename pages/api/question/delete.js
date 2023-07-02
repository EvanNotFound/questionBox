import { checkToken } from "../../../utils";
import { DBQuery } from "../../../utils/db";

export default async function handler(req, res) {
    const { id } = req.query;
    const { token } = req.headers;
    if (!checkToken(token)) {
        res.status(401).json({
            msg: "Please login first",
        });
        return;
    }
    const query = new DBQuery("Question");
    query.equalTo("objectId", id);
    const question = await query.first();
    await question.destroy();
    res.status(200).json({
        msg: "Successfully deleted",
    });
}
