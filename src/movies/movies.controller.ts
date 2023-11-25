import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'good';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `Search ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `One ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `Remove ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie ${movieId}`;
  }
}
