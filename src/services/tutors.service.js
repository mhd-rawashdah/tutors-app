import Models from "../../db/models/index.cjs";

const { User, Tutor, Country, Subject, Qualification, Sequelize } = Models;
const { Op } = Sequelize;

class TutorsService {
  constructor() {}

  async get ({search, page, limit, sort}) {

    page = !page || parseInt(page) <= 1? 1 : parseInt(page);
    limit = !limit || parseInt(limit) > 20? 20 : parseInt(limit);
    const offset = (page - 1) * limit;

    const where = {};
    if (search) {
      where[Op.or] =  [
        {firstName: {[Op.like]: `${search}%`} },
        {lastName: {[Op.like]: `${search}%`} },
        // {"$tutor.jobTitle$": {[Op.like]: `${search}%`}},
      ]
    }
    
    const result =  await User.findAll({
      attributes: { 
        exclude: ['password', 'deletedAt', 'createdAt', 'updatedAt', 'email', 'countryId' , 'roleId', 'isActive'] 
      },
      include: [
        {
            model:  Tutor,
            as: 'tutor',
            attributes: { exclude: ['deletedAt', 'createdAt', 'updatedAt', 'verifiedBy', 'userId'] },
            include: [
                {
                    model: Subject,
                    as: 'subjects',
                }
            ]

        },
        {
            model: Country,
            as: 'country'
        }
      ],
      where,
      offset,
      limit,
    });
    return result;
  }
}


export default new TutorsService();