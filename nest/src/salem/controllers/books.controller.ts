import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";
import { BookService } from "../services/book.service";

@Controller('books')
export class BoooksController {

    constructor(
        private readonly service: BookService
    ) {}

    @Get()
    getAll() {
        return this.service.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: number) {
        return this.service.getById(id);
    }

    @Post()
    create(@Body() data) {
        return this.service.create(data);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() data) {
        return this.service.update(id, data);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }

}