import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repository/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const categoriesRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(
        categoriesRepository,
    );

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

export { specificationsRoutes };
