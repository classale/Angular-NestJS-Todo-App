import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Todo } from "./entities/todo.entity";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>
    ) {};

    test() {
        return "test! :3";
    }

    async store(todoDto: CreateTodoDto) {
        return this.todoRepository.insert(
            {
                name: todoDto.name,
                description: todoDto.description
            }
        );
    }

    async getAll() {
        return this.todoRepository.find();
    }

    async get(id: number) {
        return this.todoRepository.findOne({
            where: {
                "id": id
            }
        });
    }

    async delete(id: number) {
        return this.todoRepository.delete({
            "id": id
        })
    }

    async patch(id: number, todoDto: CreateTodoDto) {
        return this.todoRepository.update({
            "id": id
        }, {
            "done": todoDto.done,
            "name": todoDto.name,
            "description": todoDto.description
        })
    }
}