import axios from 'axios';

const API_URL = 'http://your-backend-url.com/api/v1';

export const login = (email, password) => {
  return axios.post(`${API_URL}/auth/login/access-token`, { username: email, password });
};

export const startQuiz = (categoryId) => {
  return axios.post(`${API_URL}/quizzes/start`, { category_id: categoryId });
};

export const getNextQuestion = (sessionId) => {
  return axios.get(`${API_URL}/quizzes/next-question?session_id=${sessionId}`);
};

export const submitAnswer = (sessionId, answer) => {
  return axios.post(`${API_URL}/quizzes/submit-answer?session_id=${sessionId}`, { answer });
};

// Add more API calls as needed