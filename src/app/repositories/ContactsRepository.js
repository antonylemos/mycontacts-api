const { response } = require('express');

const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Antony',
    email: 'antony@mail.com',
    phone: '77777777',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
