/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Category } from "./schemas/Category.schema";
import { Model } from "mongoose";

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel("Category") private readonly categoryModel: Model<Category>) {}

    async create(category: Category): Promise<Category> {
      try {
        const newCategory = new this.categoryModel(category);
        return await newCategory.save();
      } catch (error) {
        // Check for duplicate key error
        if (error.code === 11000) {  // Mongoose duplicate key error code
          throw new HttpException(
            'Category name already exists',
            HttpStatus.CONFLICT
          );
        }
        throw new HttpException(
          'Error creating category',
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
    }

    async findAll(): Promise<Category[]> {
      return await this.categoryModel.find().exec();
    }

}

