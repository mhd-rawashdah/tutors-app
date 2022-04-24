'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const types = [
      {
        "id": "ca52c1fb-9efc-412e-bbf6-6fc496f2009f",
        "tutorId": "12277b3f-0b5d-4226-880f-5b31b5e1b90e",
        "typeId": 2,
        "school": "American University of Central Asia",
        "field": "Legal",
        "startDate": new Date("10/14/2021"),
        "endDate": new Date("10/8/2021"),
        "grade": 74.7,
        "description": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy."
      },
      {
        "id": "9675c41a-2a0a-48c7-af85-699d0003041f",
        "tutorId": "58824b95-5e50-4778-b0eb-b4571d7309a4",
        "typeId": 2,
        "school": "Bayero University Kano",
        "field": "Services",
        "startDate": new Date("11/14/2021"),
        "endDate": new Date("6/8/2021"),
        "grade": 57.2,
        "description": "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst."
      },
      {
        "id": "bc9a037d-eaa7-4595-b125-175f58a16e10",
        "tutorId": "77fc817e-1c3d-4fe4-aac6-bfb1083ee6b2",
        "typeId": 4,
        "school": "Campbellsville College",
        "field": "Legal",
        "startDate": new Date("12/17/2021"),
        "endDate": new Date("4/26/2021"),
        "grade": 50.5,
        "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl."
      },
      {
        "id": "cb39622d-2540-461e-937a-dade2e4d8ed4",
        "tutorId": "8474b0e9-ce90-424b-b372-f1dc0981ec13",
        "typeId": 3,
        "school": "Peace College",
        "field": "Human Resources",
        "startDate": new Date("12/17/2021"),
        "endDate": new Date("4/28/2021"),
        "grade": 97.9,
        "description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed."
      },
      {
        "id": "0e8a7ecc-580d-4939-ba75-f7b85182b59c",
        "tutorId": "d278002e-cd58-4f07-b8ff-5f702468472d",
        "typeId": 2,
        "school": "Sang Myung University",
        "field": "Sales",
        "startDate": new Date("10/31/2021"),
        "endDate": new Date("12/28/2021"),
        "grade": 62.6,
        "description": "Integer ac leo. Pellentesque ultrices mattis odio."
      },
      {
        "id": "79690d8a-3c2d-4415-9935-3309f4ec4201",
        "tutorId": "702ac240-7089-45f1-be5d-e8d6ff93d596",
        "typeId": 4,
        "school": "Omdurman Islamic University",
        "field": "Sales",
        "startDate": new Date("1/4/2022"),
        "endDate": new Date("6/5/2021"),
        "grade": 77.1,
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
      },
      {
        "id": "74ab63ec-aa15-4aee-ab77-0f9c9190dfb3",
        "tutorId": "2a8e81a8-cd4e-488e-b8b9-fb1a819638c5",
        "typeId": 1,
        "school": "Berhampur University",
        "field": "Support",
        "startDate": new Date("1/21/2022"),
        "endDate": new Date("3/20/2022"),
        "grade": 71.1,
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu."
      },
      {
        "id": "e9138f9b-b4b2-4cd8-8faf-714ac7f6d5ba",
        "tutorId": "f94ecef6-df19-429a-804e-77afaaa4af60",
        "typeId": 1,
        "school": "Barber-Scotia College",
        "field": "Sales",
        "startDate": new Date("2/4/2022"),
        "endDate": new Date("4/23/2022"),
        "grade": 88.2,
        "description": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla."
      },
      {
        "id": "fc6369f8-3c60-4483-9ee0-2484aa48b37e",
        "tutorId": "509d238e-529a-4e7e-be51-5f3c6b379ca6",
        "typeId": 3,
        "school": "Queens College",
        "field": "Support",
        "startDate": new Date("11/17/2021"),
        "endDate": new Date("10/6/2021"),
        "grade": 82.6,
        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue."
      },
      {
        "id": "5e196833-b0bc-4204-9b3d-6c0587ce7b28",
        "tutorId": "f627f0ef-1e6c-4c7e-ad79-8ac3d259cf86",
        "typeId": 2,
        "school": "Ecole Supérieure de Commerce de Sophia Antipolis",
        "field": "Marketing",
        "startDate": new Date("5/12/2021"),
        "endDate": new Date("5/11/2021"),
        "grade": 87.8,
        "description": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl."
      }
    ]
    ;
    
    await queryInterface.bulkInsert('Qualifications', types, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Qualifications', null, {});
  }
};
