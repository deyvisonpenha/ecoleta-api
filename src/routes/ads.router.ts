import { Router } from 'express';
import {getCustomRepository} from 'typeorm';
import AdRepository from '../repositories/AdRepository';

const adsRouter = Router();

adsRouter.get('/', async (request, response) => {
    const adRepository = getCustomRepository(AdRepository);
    const ads = await adRepository.all();
    return response.json(ads);
});

adsRouter.post('/', async (request, response) => {
    const adRepository = getCustomRepository(AdRepository);

    const {image, email, whatsapp, title, description, 
        city, uf, latitude, longitude} = request.body;

    const ads = await adRepository.create({image, email, whatsapp, title, description, 
        city, uf, latitude, longitude});

    return response.json(ads);
});

export default adsRouter;
