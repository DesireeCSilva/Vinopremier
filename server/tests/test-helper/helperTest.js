export const testUser = {
    "name": "test user",
    "email": "test@gmail.com",
    "phone": "666666666",
    "password": "test1234"
}

export const testAdmin = {
    "name": "test admin",
    "email": "test@gmail.com",
    "phone": "666666666",
    "password": "test1234",
    "role": "admin"
}

export const loginUser = {
    "email": "test@gmail.com",
    "password": "test1234"
}

export const invalidUser = {
    "email": "invalidemail@example.com",
    "password": "invalidpassword"
}

export const invalidPasswordUser = { 
    email: loginUser.email, 
    password: 'incorrectpassword' 
}
