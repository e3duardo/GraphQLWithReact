print('Start #################################################################');

db = db.getSiblingDB('auth-db');
db.createUser(
  {
    user: 'auth',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'auth-db' }],
  },
);
db.createCollection('initial');

db = db.getSiblingDB('lyrical-db');
db.createUser(
  {
    user: 'lyrical',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'lyrical-db' }],
  },
);
db.createCollection('initial');

print('END #################################################################');
