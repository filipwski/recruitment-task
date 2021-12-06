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

export const getUsers = apiClient.get<User[]>('users');

type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export const getComments = apiClient.get<Comment[]>('comments');
