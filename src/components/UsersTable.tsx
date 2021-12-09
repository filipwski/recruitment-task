import { useAsync } from 'react-use';
import { getUsers } from '../clients/apiClient';

export const UsersTable = () => {
    const { error, loading, value } = useAsync(getUsers, []);
    return loading
        ? (<p>Loading...</p>)
        : error
        ? (<p>error.message</p>)
        : (<p>Users</p>);
};
