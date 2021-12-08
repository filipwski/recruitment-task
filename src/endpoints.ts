export const ENDPOINTS = process.env.NODE_ENV === 'development'
    ? {
        apiEndpoint: 'http://localhost:4000'
    }
    : {
        apiEndpoint: 'https://jsonplaceholder.typicode.com/',
    };
