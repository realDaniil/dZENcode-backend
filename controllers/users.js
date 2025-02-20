import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

const users = [
  { email: 'oleksandr@oleksandr.com', name: 'Олександр', createdAt: '2023-11-16T18:14:30.124Z' },
  { email: 'vic@gmail.com', name: 'Виктория', createdAt: '2024-05-27T18:15:20.124Z' }
];

class CustomError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const registerUser = async (req, res) => {
  try {
    let { email, password, name } = req.body;

    email = email?.trim();
    password = password?.trim();
    name = name?.trim();

    if (!email || !password || !name) {
      throw new CustomError('Все поля (email, password, name) обязательны', 400);
    }
    if (typeof email !== 'string' || typeof password !== 'string' || typeof name !== 'string') {
      throw new CustomError('Некорректный формат данных', 400);
    }
    if (users.find((user) => user.email === email)) {
      throw new CustomError('Данная почта уже используется', 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { email, name, password: hashedPassword, createdAt: new Date() };
    users.push(newUser);

    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token, email, name });
  } catch (error) {
    handleError(error, res);
  }
};

export const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    email = email?.trim();
    password = password?.trim();

    if (!email || !password) {
      throw new CustomError('Email и пароль обязательны', 400);
    }
    const user = users.find((user) => user.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new CustomError('Неверные учетные данные', 401);
    }

    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token, email: user.email, name: user.name });
  } catch (error) {
    handleError(error, res);
  }
};

export const getUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new CustomError('Токен отсутствует', 401);
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    const user = users.find((u) => u.email === decoded.email);
    if (!user) {
      throw new CustomError('Пользователь не найден', 404);
    }

    res.json({ email: user.email, name: user.name });
  } catch (error) {
    handleError(error, res);
  }
};

export const getUsers = async (req, res) => {
  try {
    res.json(users.map(({ email, createdAt, name }) => ({ email, createdAt, name })));
  } catch (error) {
    handleError(error, res);
  }
};

export const updateUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new CustomError('Токен отсутствует', 401);

    const decoded = jwt.verify(token, SECRET_KEY);
    let { email, name } = req.body;

    email = email?.trim();
    name = name?.trim();

    if (email && typeof email !== 'string') throw new CustomError('Некорректный формат email', 400);
    if (name && typeof name !== 'string') throw new CustomError('Некорректный формат name', 400);

    const userIndex = users.findIndex((u) => u.email === decoded.email);
    if (userIndex === -1) throw new CustomError('Пользователь не найден', 404);

    if (email && email !== users[userIndex].email) {
      if (users.some((u) => u.email === email)) throw new CustomError('Почта уже используется другим пользователем', 400);
    }

    users[userIndex].name = name || users[userIndex].name;
    users[userIndex].email = email || users[userIndex].email;

    const newToken = jwt.sign({ email: users[userIndex].email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token: newToken, email: users[userIndex].email, name: users[userIndex].name });
  } catch (error) {
    handleError(error, res);
  }
};

export const deleteAllUsers = async (req, res) => {
  try {
    users.splice(
      0,
      users.length,
      ...users.filter((user) => user.email === 'oleksandr@oleksandr.com' || user.email === 'vic@gmail.com')
    );
    res.json(users);
  } catch (error) {
    handleError(error, res);
  }
};

const handleError = (error, res) => {
  console.error('Error:', error.message);
  const statusCode = error instanceof CustomError ? error.statusCode : 500;
  res.status(statusCode).json({ message: error.message || 'Server error' });
};
