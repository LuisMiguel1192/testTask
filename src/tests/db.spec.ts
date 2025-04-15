import { test, expect } from '../fixtures/dbPage.fixture';

test('@db', async ({ Db }) => {
  const testUsername = 'lfigueroa2';

  const newUser = await Db.createUser({
    username: testUsername,
    firstname: 'Luis',
    lastname: 'Figueroa',
    password: '12345678',
    email: 'lfigueroa@example.com',
    roleName: 'admin',
  });

  console.log('✅ User add:', newUser.username);
  expect(newUser.username).toBe(testUsername);

  expect(newUser).not.toBeNull();
  expect(newUser.username).toBe(testUsername);
  expect(newUser.email).toBe('lfigueroa@example.com');
  expect(typeof newUser.id).toBe('bigint');

  console.log(`✅ user '${newUser.username}' successfully added with ID ${newUser.id}`);

  await Db.deleteUserByUsername(testUsername);
  console.log('🗑️ User deleted');

  const deleted = await Db.findUser(testUsername);
  expect(deleted).toBeNull();
});