'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    const tutors = [
      {
        "userId": "12277b3f-0b5d-4226-880f-5b31b5e1b90e",
        "JobTitle": "Junior Executive",
        "yearsOfExperience": 7,
        "overview": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique.",
        "rating": 2.6,
        "reviewsCount": 323,
        "pricePerHour": 29
      },
      {
        "userId": "58824b95-5e50-4778-b0eb-b4571d7309a4",
        "JobTitle": "Research Nurse",
        "yearsOfExperience": 17,
        "overview": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "rating": 1.6,
        "reviewsCount": 190,
        "pricePerHour": 30
      },
      {
        "userId": "77fc817e-1c3d-4fe4-aac6-bfb1083ee6b2",
        "JobTitle": "Operator",
        "yearsOfExperience": 14,
        "overview": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rating": 2.9,
        "reviewsCount": 300,
        "pricePerHour": 27
      },
      {
        "userId": "8474b0e9-ce90-424b-b372-f1dc0981ec13",
        "JobTitle": "Senior Developer",
        "yearsOfExperience": 13,
        "overview": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "rating": 3.4,
        "reviewsCount": 458,
        "pricePerHour": 2
      },
      {
        "userId": "d278002e-cd58-4f07-b8ff-5f702468472d",
        "JobTitle": "Account Coordinator",
        "yearsOfExperience": 4,
        "overview": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut.",
        "rating": 2.7,
        "reviewsCount": 230,
        "pricePerHour": 16
      },
      {
        "userId": "702ac240-7089-45f1-be5d-e8d6ff93d596",
        "JobTitle": "Senior Editor",
        "yearsOfExperience": 5,
        "overview": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis.",
        "rating": 2.5,
        "reviewsCount": 31,
        "pricePerHour": 26
      },
      {
        "userId": "2a8e81a8-cd4e-488e-b8b9-fb1a819638c5",
        "JobTitle": "Web Designer III",
        "yearsOfExperience": 14,
        "overview": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget.",
        "rating": 4.3,
        "reviewsCount": 48,
        "pricePerHour": 12
      },
      {
        "userId": "f94ecef6-df19-429a-804e-77afaaa4af60",
        "JobTitle": "VP Marketing",
        "yearsOfExperience": 17,
        "overview": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "rating": 3.6,
        "reviewsCount": 81,
        "pricePerHour": 22
      },
      {
        "userId": "509d238e-529a-4e7e-be51-5f3c6b379ca6",
        "JobTitle": "Design Engineer",
        "yearsOfExperience": 10,
        "overview": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "rating": 3.8,
        "reviewsCount": 96,
        "pricePerHour": 7
      },
      {
        "userId": "f627f0ef-1e6c-4c7e-ad79-8ac3d259cf86",
        "JobTitle": "Help Desk Technician",
        "yearsOfExperience": 12,
        "overview": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rating": 2.1,
        "reviewsCount": 177,
        "pricePerHour": 9
      }
    ]

    await queryInterface.bulkInsert('Tutors', tutors, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tutors', null, {});
  }
};
