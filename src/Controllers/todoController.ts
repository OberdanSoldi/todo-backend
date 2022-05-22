import {Request, Response} from "express";
import { db } from "../db";

const todo = (req: Request, res:Response) => {
    const query = `SELECT * FROM todo`;
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
}

const createTodo = (req: Request, res: Response) => {
    const { todo } = req.body;
    console.log(todo);
    const query = `INSERT INTO todo (todo) VALUES ('${todo}')`;
    db.query(query, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({
                message: "Todo created successfully",
                status: 200
            });
        }
    });
};

const deleteTodo = (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `DELETE FROM todo WHERE id = ${id}`;
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (result.affectedRows === 0) {
            res.status(404).send({
                message: "Todo not found",
                status: 404
            });
        } else {
            res.status(200).send({
                message: "Todo deleted successfully",
                status: 200
            });
        }
    });
};

export {
    createTodo,
    deleteTodo,
    todo
};