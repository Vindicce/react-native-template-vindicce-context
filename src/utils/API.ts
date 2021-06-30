import axios from 'axios';
import { API_URL } from '../configs/constants';

export const API = axios.create({
  baseURL: API_URL,
});
