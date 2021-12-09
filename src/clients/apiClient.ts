import axios from 'axios';
import { ENDPOINTS } from '../endpoints';

const apiClient = axios.create({ baseURL: ENDPOINTS.apiEndpoint });

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

export const getUsers = async () => (await apiClient.get<User[]>('users')).data;

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const getComments = async () => (await apiClient.get<Comment[]>('comments')).data;
