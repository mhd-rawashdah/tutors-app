'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    const data = [
      { 
        tutorId: '12277b3f-0b5d-4226-880f-5b31b5e1b90e', 
        subjectId: 1
      },
      { 
        tutorId: '12277b3f-0b5d-4226-880f-5b31b5e1b90e', 
        subjectId: 2
      },
      { 
        tutorId: '12277b3f-0b5d-4226-880f-5b31b5e1b90e', 
        subjectId: 3
      },
      { 
        tutorId: '58824b95-5e50-4778-b0eb-b4571d7309a4', 
        subjectId: 3
      },
      { 
        tutorId: '58824b95-5e50-4778-b0eb-b4571d7309a4', 
        subjectId: 5
      },
      { 
        tutorId: '58824b95-5e50-4778-b0eb-b4571d7309a4', 
        subjectId: 6
      },
      { 
        tutorId: '77fc817e-1c3d-4fe4-aac6-bfb1083ee6b2', 
        subjectId: 5
      },
      { 
        tutorId: '77fc817e-1c3d-4fe4-aac6-bfb1083ee6b2', 
        subjectId: 4
      },
      { 
        tutorId: '77fc817e-1c3d-4fe4-aac6-bfb1083ee6b2', 
        subjectId: 7
      },
      { 
        tutorId: '8474b0e9-ce90-424b-b372-f1dc0981ec13', 
        subjectId: 1
      },
      { 
        tutorId: '8474b0e9-ce90-424b-b372-f1dc0981ec13', 
        subjectId: 2
      },
      { 
        tutorId: '8474b0e9-ce90-424b-b372-f1dc0981ec13', 
        subjectId: 3
      },
      { 
        tutorId: '2a8e81a8-cd4e-488e-b8b9-fb1a819638c5', 
        subjectId: 2
      },
      { 
        tutorId: '2a8e81a8-cd4e-488e-b8b9-fb1a819638c5', 
        subjectId: 4
      },
      { 
        tutorId: '2a8e81a8-cd4e-488e-b8b9-fb1a819638c5', 
        subjectId: 6
      },
      { 
        tutorId: '509d238e-529a-4e7e-be51-5f3c6b379ca6', 
        subjectId: 3
      },
      { 
        tutorId: '509d238e-529a-4e7e-be51-5f3c6b379ca6', 
        subjectId: 1
      },
      { 
        tutorId: '509d238e-529a-4e7e-be51-5f3c6b379ca6', 
        subjectId: 7
      }
    ];
    await queryInterface.bulkInsert('TutorSubjects', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TutorSubjects', null, {});
  }
};
