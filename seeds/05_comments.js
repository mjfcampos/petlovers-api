/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("comments").del();
  await knex("comments").insert([
    {
      id: 1,
      user_id: 5,
      booking_id: 19,
      rate: 4,
      title: "Great pet care service",
      comment:
        "I had a wonderful experience with this person taking care of my pets. They were attentive, caring, and my pets loved them. Highly recommended!",
    },
    {
      id: 2,
      user_id: 11,
      booking_id: 32,
      rate: 3,
      title: "Average pet sitter",
      comment:
        "The person did an okay job taking care of my pets. There were a few minor issues, but overall, it was a satisfactory experience.",
    },
    {
      id: 3,
      user_id: 6,
      booking_id: 25,
      rate: 5,
      title: "Exceptional pet care provider!",
      comment:
        "I couldn't be happier with the service provided by this person. They went above and beyond to ensure my pets were happy and well taken care of.",
    },
    {
      id: 4,
      user_id: 3,
      booking_id: 12,
      rate: 4,
      title: "Reliable and caring pet sitter",
      comment:
        "I had a great experience with this person as my pet sitter. They were punctual, responsible, and showed genuine care for my pets. Highly recommended!",
    },
    {
      id: 5,
      user_id: 7,
      booking_id: 9,
      rate: 5,
      title: "Fantastic pet care service!",
      comment:
        "This person provided outstanding care for my pets. They were professional, reliable, and showed immense love for animals. I would hire them again!",
    },
    {
      id: 6,
      user_id: 8,
      booking_id: 47,
      rate: 3,
      title: "Decent pet care experience",
      comment:
        "The person did a decent job taking care of my pets. While there were a few areas that could have been improved, overall, it was satisfactory.",
    },
    {
      id: 7,
      user_id: 12,
      booking_id: 14,
      rate: 5,
      title: "Highly recommended pet sitter!",
      comment:
        "I had an amazing experience with this person as my pet sitter. They were reliable, trustworthy, and provided exceptional care for my pets.",
    },
    {
      id: 8,
      user_id: 4,
      booking_id: 37,
      rate: 2,
      title: "Below-average service",
      comment:
        "I was not satisfied with the service provided by this person. There were several issues and my pets did not receive the care they deserved.",
    },
    {
      id: 9,
      user_id: 9,
      booking_id: 21,
      rate: 4,
      title: "Good pet care provider",
      comment:
        "I had a positive experience with this person taking care of my pets. They were attentive, responsible, and my pets were well taken care of.",
    },
    {
      id: 10,
      user_id: 13,
      booking_id: 40,
      rate: 5,
      title: "Exemplary pet sitter!",
      comment:
        "I cannot praise this person enough for the outstanding care they provided to my pets. They exceeded my expectations in every aspect.",
    },
    {
      id: 11,
      user_id: 2,
      booking_id: 5,
      rate: 3,
      title: "Average pet care service",
      comment:
        "The person did an okay job taking care of my pets. While there were no major issues, I expected a bit more attention to detail.",
    },
    {
      id: 12,
      user_id: 10,
      booking_id: 29,
      rate: 4,
      title: "Reliable pet care provider",
      comment:
        "I had a positive experience with this person taking care of my pets. They were reliable, responsible, and followed my instructions well.",
    },
    {
      id: 13,
      user_id: 1,
      booking_id: 45,
      rate: 5,
      title: "Excellent pet care service!",
      comment:
        "This person provided exceptional care for my pets. They were dedicated, loving, and went the extra mile to ensure my pets' well-being.",
    },
    {
      id: 14,
      user_id: 14,
      booking_id: 6,
      rate: 4,
      title: "Dependable pet sitter",
      comment:
        "I had a positive experience with this person as my pet sitter. They were reliable, trustworthy, and my pets were in safe hands.",
    },
    {
      id: 15,
      user_id: 15,
      booking_id: 18,
      rate: 3,
      title: "Average pet care experience",
      comment:
        "The person did an okay job taking care of my pets. While there were no major issues, I expected a bit more attention and care.",
    },
    {
      id: 16,
      user_id: 5,
      booking_id: 30,
      rate: 5,
      title: "Outstanding pet care provider!",
      comment:
        "I am extremely satisfied with the service provided by this person. They showed great care, attention, and love for my pets.",
    },
    {
      id: 17,
      user_id: 9,
      booking_id: 22,
      rate: 4,
      title: "Great pet sitter!",
      comment:
        "I had a great experience with this person as my pet sitter. They were reliable, responsible, and my pets were well taken care of.",
    },
    {
      id: 18,
      user_id: 4,
      booking_id: 38,
      rate: 2,
      title: "Disappointing pet care service",
      comment:
        "I was disappointed with the service provided by this person. There were several issues, and my pets did not receive proper care.",
    },
    {
      id: 19,
      user_id: 12,
      booking_id: 15,
      rate: 4,
      title: "Recommended pet care provider",
      comment:
        "I had a positive experience with this person taking care of my pets. They were attentive, responsible, and my pets were happy and healthy.",
    },
    {
      id: 20,
      user_id: 3,
      booking_id: 49,
      rate: 5,
      title: "Top-notch pet sitter!",
      comment:
        "I couldn't be happier with the service provided by this person as my pet sitter. They were reliable, caring, and my pets loved them.",
    },
    {
      id: 21,
      user_id: 6,
      booking_id: 43,
      rate: 4,
      title: "Reliable and caring pet sitter",
      comment:
        "I had a great experience with this person taking care of my pets. They were reliable, responsible, and showed genuine care for my furry friends.",
    },
    {
      id: 22,
      user_id: 9,
      booking_id: 29,
      rate: 5,
      title: "Exceptional pet care service",
      comment:
        "I couldn't be happier with the service provided by this person. They exceeded my expectations and took excellent care of my pets.",
    },
    {
      id: 23,
      user_id: 3,
      booking_id: 11,
      rate: 3,
      title: "Average pet care experience",
      comment:
        "The person provided satisfactory care for my pets. While there were no major issues, I felt that some aspects could have been improved.",
    },
    {
      id: 24,
      user_id: 8,
      booking_id: 34,
      rate: 4,
      title: "Dependable and trustworthy",
      comment:
        "I had peace of mind leaving my pets with this person. They were dependable, trustworthy, and followed my instructions diligently.",
    },
    {
      id: 25,
      user_id: 13,
      booking_id: 2,
      rate: 5,
      title: "Outstanding pet care provider",
      comment:
        "This person went above and beyond to take care of my pets. They provided exceptional service and treated my pets like their own.",
    },
    {
      id: 26,
      user_id: 2,
      booking_id: 21,
      rate: 4,
      title: "Great attention to detail",
      comment:
        "I appreciated the attention to detail shown by this person in taking care of my pets. They followed all instructions meticulously.",
    },
    {
      id: 27,
      user_id: 10,
      booking_id: 8,
      rate: 3,
      title: "Satisfactory pet care service",
      comment:
        "The person provided satisfactory care for my pets. While there were no major issues, I expected a bit more personalized attention.",
    },
    {
      id: 28,
      user_id: 4,
      booking_id: 38,
      rate: 5,
      title: "Highly recommended pet sitter",
      comment:
        "I highly recommend this person as a pet sitter. They took excellent care of my pets and provided regular updates on their well-being.",
    },
    {
      id: 29,
      user_id: 12,
      booking_id: 15,
      rate: 4,
      title: "Attentive and responsible",
      comment:
        "I had a positive experience with this person taking care of my pets. They were attentive, responsible, and my pets were well taken care of.",
    },
    {
      id: 30,
      user_id: 5,
      booking_id: 49,
      rate: 5,
      title: "Top-notch pet care service",
      comment:
        "This person provided exceptional care for my pets. They were professional, loving, and ensured the well-being of my furry companions.",
    },
    {
      id: 31,
      user_id: 7,
      booking_id: 9,
      rate: 4,
      title: "Dependable and caring",
      comment:
        "I had a positive experience with this person as my pet sitter. They were dependable, caring, and provided regular updates on my pets.",
    },
    {
      id: 32,
      user_id: 1,
      booking_id: 30,
      rate: 3,
      title: "Average pet care provider",
      comment:
        "The person provided average care for my pets. While there were no major issues, I expected a bit more personalized attention and care.",
    },
    {
      id: 33,
      user_id: 11,
      booking_id: 19,
      rate: 5,
      title: "Exceptional service",
      comment:
        "I'm extremely satisfied with the service provided by this person. They took great care of my pets and went above and beyond my expectations.",
    },
    {
      id: 34,
      user_id: 3,
      booking_id: 6,
      rate: 4,
      title: "Reliable and attentive pet sitter",
      comment:
        "I had peace of mind leaving my pets with this person. They were reliable, attentive, and provided updates on my pets' well-being.",
    },
    {
      id: 35,
      user_id: 14,
      booking_id: 35,
      rate: 3,
      title: "Satisfactory pet care experience",
      comment:
        "The person provided satisfactory care for my pets. While there were no major issues, I expected a bit more attention to detail.",
    },
    {
      id: 36,
      user_id: 8,
      booking_id: 14,
      rate: 5,
      title: "Highly recommended pet sitter",
      comment:
        "I highly recommend this person as a pet sitter. They took excellent care of my pets and showed genuine love and affection towards them.",
    },
    {
      id: 37,
      user_id: 10,
      booking_id: 37,
      rate: 4,
      title: "Caring and responsible",
      comment:
        "This person took great care of my pets. They were responsible, caring, and made sure my pets were comfortable and well-fed.",
    },
    {
      id: 38,
      user_id: 4,
      booking_id: 4,
      rate: 3,
      title: "Average pet care provider",
      comment:
        "The person provided average care for my pets. While they followed instructions, I expected a bit more personalization and attention to detail.",
    },
    {
      id: 39,
      user_id: 12,
      booking_id: 45,
      rate: 5,
      title: "Exceptional pet care service",
      comment:
        "I couldn't be happier with the service provided by this person. They took excellent care of my pets and showed genuine care and affection.",
    },
    {
      id: 40,
      user_id: 5,
      booking_id: 26,
      rate: 4,
      title: "Dependable and trustworthy",
      comment:
        "I had peace of mind leaving my pets with this person. They were dependable, trustworthy, and provided a safe and comfortable environment for my pets.",
    },
    {
      id: 41,
      user_id: 3,
      booking_id: 21,
      rate: 5,
      title: "Exceptional pet care provider",
      comment:
        "I had an exceptional experience with this person taking care of my pets. They went above and beyond to ensure the well-being and happiness of my furry friends. Highly recommended!",
    },
    {
      id: 42,
      user_id: 5,
      booking_id: 32,
      rate: 4,
      title: "Reliable and attentive pet sitter",
      comment:
        "This person provided reliable and attentive pet sitting services. They followed all instructions carefully and kept me updated on my pets' activities. I felt at ease knowing my pets were in good hands.",
    },
    {
      id: 43,
      user_id: 7,
      booking_id: 4,
      rate: 3,
      title: "Average pet care experience",
      comment:
        "My experience with this person taking care of my pets was average. They fulfilled their responsibilities adequately, but I expected more personalized attention and interaction with my pets.",
    },
    {
      id: 44,
      user_id: 10,
      booking_id: 12,
      rate: 5,
      title: "Highly recommended pet sitter",
      comment:
        "I highly recommend this person as a pet sitter. They provided exceptional care and love to my pets. They treated them as their own and went the extra mile to ensure their comfort and happiness.",
    },
    {
      id: 45,
      user_id: 6,
      booking_id: 37,
      rate: 4,
      title: "Caring and responsible",
      comment:
        "This person took great care of my pets during my absence. They were responsible, reliable, and showed genuine care and affection towards my furry companions. I would trust them with my pets again.",
    },
    {
      id: 46,
      user_id: 12,
      booking_id: 9,
      rate: 5,
      title: "Outstanding pet care service",
      comment:
        "I had an outstanding experience with this person taking care of my pets. They provided top-notch service, showing genuine love and care for my pets. I will definitely hire them again!",
    },
    {
      id: 47,
      user_id: 8,
      booking_id: 25,
      rate: 3,
      title: "Average pet care provider",
      comment:
        "The person provided average pet care services. While they fulfilled their responsibilities adequately, I expected a bit more attention to detail and personalization in their approach.",
    },
    {
      id: 48,
      user_id: 2,
      booking_id: 42,
      rate: 4,
      title: "Reliable and trustworthy",
      comment:
        "I found this person to be reliable and trustworthy as a pet sitter. They followed my instructions and kept my pets' routines intact. I felt comfortable leaving my pets in their care.",
    },
    {
      id: 49,
      user_id: 9,
      booking_id: 8,
      rate: 5,
      title: "Exceptional service",
      comment:
        "This person provided exceptional service in taking care of my pets. They showed genuine love and care, and my pets were happy and healthy upon my return. I would highly recommend them!",
    },
    {
      id: 50,
      user_id: 4,
      booking_id: 28,
      rate: 4,
      title: "Dependable and caring",
      comment:
        "I found this person to be dependable and caring when it comes to pet care. They followed all instructions and went the extra mile to ensure my pets' well-being. I would hire them again.",
    },
    {
      id: 51,
      user_id: 7,
      booking_id: 3,
      rate: 2,
      title: "Below-average experience",
      comment:
        "Unfortunately, my experience with this person taking care of my pets was below average. There were some lapses in their care and attention, and my pets seemed less comfortable in their presence.",
    },
    {
      id: 52,
      user_id: 13,
      booking_id: 17,
      rate: 5,
      title: "Great pet care service",
      comment:
        "I had a great experience with this person taking care of my pets. They were attentive, responsible, and provided updates regularly. My pets were happy and well-cared for.",
    },
    {
      id: 53,
      user_id: 1,
      booking_id: 38,
      rate: 3,
      title: "Average pet sitter",
      comment:
        "The person was an average pet sitter. They fulfilled their responsibilities adequately, but I expected a bit more engagement and interaction with my pets.",
    },
    {
      id: 54,
      user_id: 11,
      booking_id: 5,
      rate: 4,
      title: "Responsible and dedicated",
      comment:
        "This person showed great responsibility and dedication in taking care of my pets. They followed all instructions and ensured my pets' well-being throughout my absence.",
    },
    {
      id: 55,
      user_id: 9,
      booking_id: 24,
      rate: 5,
      title: "Highly recommended pet care provider",
      comment:
        "I highly recommend this person as a pet care provider. They took exceptional care of my pets and showed genuine love and affection towards them. I had a worry-free experience.",
    },
    {
      id: 56,
      user_id: 3,
      booking_id: 40,
      rate: 3,
      title: "Satisfactory pet sitting service",
      comment:
        "The person provided satisfactory pet sitting services. They took care of my pets' basic needs, but I expected a bit more attention and playtime with my pets.",
    },
    {
      id: 57,
      user_id: 10,
      booking_id: 16,
      rate: 5,
      title: "Excellent pet care experience",
      comment:
        "I had an excellent pet care experience with this person. They treated my pets with love and care, and my pets seemed to enjoy their company. I would definitely hire them again.",
    },
    {
      id: 58,
      user_id: 5,
      booking_id: 30,
      rate: 4,
      title: "Dependable and trustworthy",
      comment:
        "I found this person to be dependable and trustworthy as a pet care provider. They followed all instructions and took good care of my pets in my absence.",
    },
    {
      id: 59,
      user_id: 13,
      booking_id: 10,
      rate: 5,
      title: "Outstanding pet sitter",
      comment:
        "This person is an outstanding pet sitter. They provided exceptional care and attention to my pets, ensuring their happiness and well-being. I am grateful for their service.",
    },
    {
      id: 60,
      user_id: 2,
      booking_id: 36,
      rate: 3,
      title: "Average pet care service",
      comment:
        "The pet care service provided by this person was average. They fulfilled their responsibilities but lacked the extra touch that would make the experience more memorable.",
    },
    {
      id: 61,
      user_id: 8,
      booking_id: 23,
      rate: 4,
      title: "Reliable and caring",
      comment:
        "This person was reliable and caring when it comes to pet care. They followed my instructions and showed genuine affection towards my pets. I would hire them again.",
    },
    {
      id: 62,
      user_id: 4,
      booking_id: 48,
      rate: 5,
      title: "Exceptional pet sitter",
      comment:
        "I had an exceptional experience with this person as a pet sitter. They went above and beyond to ensure the happiness and well-being of my pets. Highly recommended!",
    },
    {
      id: 63,
      user_id: 12,
      booking_id: 2,
      rate: 3,
      title: "Average pet care experience",
      comment:
        "My experience with this person taking care of my pets was average. They fulfilled their responsibilities adequately, but I expected more personalized attention and interaction with my pets.",
    },
    {
      id: 64,
      user_id: 6,
      booking_id: 41,
      rate: 4,
      title: "Reliable and attentive pet sitter",
      comment:
        "This person provided reliable and attentive pet sitting services. They followed all instructions carefully and kept me updated on my pets' activities. I felt at ease knowing my pets were in good hands.",
    },
    {
      id: 65,
      user_id: 1,
      booking_id: 27,
      rate: 2,
      title: "Below-average experience",
      comment:
        "Unfortunately, my experience with this person taking care of my pets was below average. There were some lapses in their care and attention, and my pets seemed less comfortable in their presence.",
    },
    {
      id: 66,
      user_id: 9,
      booking_id: 11,
      rate: 5,
      title: "Highly recommended pet sitter",
      comment:
        "I highly recommend this person as a pet sitter. They provided exceptional care and love to my pets. They treated them as their own and went the extra mile to ensure their comfort and happiness.",
    },
    {
      id: 67,
      user_id: 3,
      booking_id: 35,
      rate: 4,
      title: "Caring and responsible",
      comment:
        "This person took great care of my pets during my absence. They were responsible, reliable, and showed genuine care and affection towards my furry companions. I would trust them with my pets again.",
    },
    {
      id: 68,
      user_id: 14,
      booking_id: 14,
      rate: 5,
      title: "Outstanding pet care service",
      comment:
        "I had an outstanding experience with this person taking care of my pets. They provided top-notch service, showing genuine love and care for my pets. I will definitely hire them again!",
    },
    {
      id: 69,
      user_id: 8,
      booking_id: 29,
      rate: 3,
      title: "Average pet care provider",
      comment:
        "The person provided average pet care services. While they fulfilled their responsibilities adequately, I expected a bit more attention to detail and personalization in their approach.",
    },
    {
      id: 70,
      user_id: 2,
      booking_id: 47,
      rate: 4,
      title: "Reliable and trustworthy",
      comment:
        "I found this person to be reliable and trustworthy as a pet sitter. They followed my instructions and kept my pets' routines intact. I felt comfortable leaving my pets in their care.",
    },
    {
      id: 71,
      user_id: 11,
      booking_id: 7,
      rate: 5,
      title: "Exceptional service",
      comment:
        "This person provided exceptional service in taking care of my pets. They showed genuine love and care, and my pets were happy and healthy upon my return. I would highly recommend them!",
    },
    {
      id: 72,
      user_id: 5,
      booking_id: 33,
      rate: 4,
      title: "Dependable and caring",
      comment:
        "I found this person to be dependable and caring when it comes to pet care. They followed all instructions and went the extra mile to ensure my pets' well-being. I would hire them again.",
    },
    {
      id: 73,
      user_id: 10,
      booking_id: 15,
      rate: 5,
      title: "Great pet care service",
      comment:
        "I had a great experience with this person taking care of my pets. They were attentive, responsible, and provided updates regularly. My pets were happy and well-cared for.",
    },
    {
      id: 74,
      user_id: 6,
      booking_id: 39,
      rate: 3,
      title: "Average pet sitter",
      comment:
        "The person was an average pet sitter. They fulfilled their responsibilities adequately, but I expected a bit more engagement and interaction with my pets.",
    },
    {
      id: 75,
      user_id: 12,
      booking_id: 13,
      rate: 4,
      title: "Responsible and dedicated",
      comment:
        "This person showed great responsibility and dedication in taking care of my pets. They followed all instructions and ensured my pets' well-being throughout my absence.",
    },
    {
      id: 76,
      user_id: 9,
      booking_id: 25,
      rate: 4,
      title: "Attentive and reliable",
      comment:
        "I had a great experience with this person taking care of my pets. They were attentive and reliable, ensuring that my pets' needs were met. I would highly recommend their services.",
    },
    {
      id: 77,
      user_id: 3,
      booking_id: 45,
      rate: 5,
      title: "Exceptional pet sitter",
      comment:
        "This person is an exceptional pet sitter. They provided the utmost care and attention to my pets, and I was pleased with their service. Highly recommended!",
    },
    {
      id: 78,
      user_id: 15,
      booking_id: 14,
      rate: 3,
      title: "Average pet care experience",
      comment:
        "My experience with this person taking care of my pets was average. They fulfilled their responsibilities adequately, but I expected a bit more personalized attention.",
    },
    {
      id: 79,
      user_id: 6,
      booking_id: 34,
      rate: 4,
      title: "Reliable and trustworthy",
      comment:
        "I found this person to be reliable and trustworthy as a pet sitter. They followed my instructions and took good care of my pets. I would hire them again.",
    },
    {
      id: 80,
      user_id: 11,
      booking_id: 9,
      rate: 5,
      title: "Highly recommended",
      comment:
        "I highly recommend this person for pet care. They provided exceptional service, and my pets were happy and well-cared for. I would definitely hire them again.",
    },
    {
      id: 81,
      user_id: 2,
      booking_id: 28,
      rate: 4,
      title: "Dependable and caring",
      comment:
        "This person is dependable and caring when it comes to pet care. They followed all instructions and took good care of my pets during my absence.",
    },
    {
      id: 82,
      user_id: 13,
      booking_id: 10,
      rate: 3,
      title: "Average pet sitter",
      comment:
        "The person was an average pet sitter. They fulfilled their responsibilities adequately, but I expected a bit more engagement with my pets.",
    },
    {
      id: 83,
      user_id: 1,
      booking_id: 21,
      rate: 5,
      title: "Wonderful pet care service",
      comment:
        "I had a wonderful experience with this person taking care of my pets. They went above and beyond to ensure my pets' happiness and well-being.",
    },
    {
      id: 84,
      user_id: 7,
      booking_id: 48,
      rate: 4,
      title: "Reliable and attentive",
      comment:
        "I found this person to be reliable and attentive when it comes to pet care. They took good care of my pets and followed all instructions.",
    },
    {
      id: 85,
      user_id: 4,
      booking_id: 33,
      rate: 2,
      title: "Below-average experience",
      comment:
        "Unfortunately, my experience with this person taking care of my pets was below average. There were some lapses in their care, and my pets seemed less comfortable.",
    },
    {
      id: 86,
      user_id: 12,
      booking_id: 16,
      rate: 5,
      title: "Fantastic pet sitter",
      comment:
        "This person is a fantastic pet sitter. They provided excellent care to my pets, and I was impressed with their dedication and attention to detail.",
    },
    {
      id: 87,
      user_id: 8,
      booking_id: 37,
      rate: 4,
      title: "Reliable and responsible",
      comment:
        "I found this person to be reliable and responsible in taking care of my pets. They followed all instructions and kept my pets' routines intact.",
    },
    {
      id: 88,
      user_id: 14,
      booking_id: 13,
      rate: 5,
      title: "Great pet care provider",
      comment:
        "I had a great experience with this person taking care of my pets. They showed genuine love and care, and my pets were happy and healthy upon my return.",
    },
    {
      id: 89,
      user_id: 5,
      booking_id: 39,
      rate: 3,
      title: "Average pet sitter",
      comment:
        "The person was an average pet sitter. They fulfilled their responsibilities adequately, but I expected a bit more engagement and interaction with my pets.",
    },
    {
      id: 90,
      user_id: 10,
      booking_id: 15,
      rate: 5,
      title: "Great pet care service",
      comment:
        "I had a great experience with this person taking care of my pets. They were attentive, responsible, and provided updates regularly. My pets were happy and well-cared for.",
    },
    {
      id: 91,
      user_id: 6,
      booking_id: 49,
      rate: 4,
      title: "Dependable and caring",
      comment:
        "I found this person to be dependable and caring when it comes to pet care. They followed all instructions and went the extra mile to ensure my pets' well-being. I would hire them again.",
    },
    {
      id: 92,
      user_id: 12,
      booking_id: 17,
      rate: 5,
      title: "Responsible and dedicated",
      comment:
        "This person showed great responsibility and dedication in taking care of my pets. They followed all instructions and ensured my pets' well-being throughout my absence.",
    },
    {
      id: 93,
      user_id: 1,
      booking_id: 44,
      rate: 3,
      title: "Average pet sitter",
      comment:
        "The person was an average pet sitter. They fulfilled their responsibilities adequately, but I expected a bit more engagement and personalized attention.",
    },
    {
      id: 94,
      user_id: 7,
      booking_id: 26,
      rate: 5,
      title: "Highly recommended",
      comment:
        "I highly recommend this person for pet care. They provided exceptional service, and my pets were happy and well-cared for. I would definitely hire them again.",
    },
    {
      id: 95,
      user_id: 3,
      booking_id: 20,
      rate: 4,
      title: "Reliable and trustworthy",
      comment:
        "I found this person to be reliable and trustworthy as a pet sitter. They followed my instructions and kept my pets' routines intact. I felt comfortable leaving my pets in their care.",
    },
    {
      id: 96,
      user_id: 15,
      booking_id: 47,
      rate: 5,
      title: "Exceptional service",
      comment:
        "This person provided exceptional service in taking care of my pets. They went above and beyond to ensure my pets' well-being and even provided extra care and attention.",
    },
    {
      id: 97,
      user_id: 9,
      booking_id: 12,
      rate: 4,
      title: "Dependable pet sitter",
      comment:
        "This person is a dependable pet sitter. They followed all instructions and kept my pets comfortable and happy during my absence. I would trust them with my pets again.",
    },
    {
      id: 98,
      user_id: 4,
      booking_id: 32,
      rate: 2,
      title: "Disappointing experience",
      comment:
        "Unfortunately, my experience with this person taking care of my pets was disappointing. There were some instances where my pets were not properly attended to, and their needs were not fully met.",
    },
    {
      id: 99,
      user_id: 8,
      booking_id: 18,
      rate: 4,
      title: "Reliable and caring",
      comment:
        "I found this person to be reliable and caring in taking care of my pets. They followed all instructions and provided regular updates. My pets were in good hands.",
    },
    {
      id: 100,
      user_id: 2,
      booking_id: 50,
      rate: 5,
      title: "Outstanding pet care",
      comment:
        "This person provided outstanding pet care services. They showed genuine love and care for my pets, and I had peace of mind knowing that my pets were in good hands.",
    },
  ]);
};
