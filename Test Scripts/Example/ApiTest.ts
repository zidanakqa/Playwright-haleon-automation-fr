/*import { test, expect } from '@playwright/test';

test.describe('Chained API calls with dynamic auth token', () => {
  let authToken: string;

  test.beforeAll(async ({ request }) => {
    // Login API to get the token
    const loginResponse = await request.post('https://api.example.com/login', {
      data: {
        username: 'test_user',
        password: 'test_password',
      },
    });

    expect(loginResponse.status()).toBe(200);
    const loginData = await loginResponse.json();
    authToken = loginData.token; // Store the token for future requests
  });

  test('Create user and fetch user data', async ({ request }) => {
    // Create a new user
    const postResponse = await request.post('https://jsonplaceholder.typicode.com/users', {
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
      data: {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
      },
    });

    expect(postResponse.status()).toBe(201);
    const newUser = await postResponse.json();

    // Fetch the newly created user data
    const getResponse = await request.get(`https://jsonplaceholder.typicode.com/users/${newUser.id}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });

    expect(getResponse.status()).toBe(200);
    const fetchedUser = await getResponse.json();

    // Validate user data
    expect(fetchedUser.name).toBe('Jane Doe');
    expect(fetchedUser.email).toBe('jane.doe@example.com');
  });
});

*/