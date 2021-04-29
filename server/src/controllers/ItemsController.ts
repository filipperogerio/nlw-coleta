import { Request, Response } from 'express';
import knex from '../database/connection'

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*').then((data) => {
            return data.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    image_url: `http://192.168.100.120:3333/uploads/${item.image}`
                }
            })
        });

        return response.json(items);
    };

   

}


export default ItemsController;