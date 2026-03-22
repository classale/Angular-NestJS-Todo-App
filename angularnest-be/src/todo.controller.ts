import { Controller, Get, Post, Body, Param, Delete, Patch } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Controller("todo")
export class TodoController {
    constructor(private service: TodoService) {}

    @Post()
    store(@Body() createTodoDto: CreateTodoDto) {
        return this.service.store(createTodoDto);
    }

    @Get()
    getAll() {
        return this.service.getAll();
    }

    @Get(":id")
    get(@Param("id") id: number) {
        return this.service.get(id);
    }

    @Delete(":id")
    delete(@Param("id") id: number) {
        return this.service.delete(id);
    }

    @Patch(":id")
    patch(@Param("id") id: number, @Body() updateTodoDto: CreateTodoDto) {
        return this.service.patch(id, updateTodoDto);
    }
}