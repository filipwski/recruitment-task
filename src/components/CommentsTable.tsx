import { useMemo } from 'react';
import { useAsync } from 'react-use';
import { getComments } from '../clients/apiClient';
import { Table } from './Table';

export const CommentsTable = () => {
    const { error, loading, value } = useAsync(getComments, []);

    const columns = useMemo(() => [
        {
            Header: "Comments",
            columns: [
                {
                    Header: "Post Id",
                    accessor: "postId",
                },
                {
                    Header: "Id",
                    accessor: "id",
                },
                {
                    Header: "Email",
                    accessor: "email",
                },
                {
                    Header: "Content",
                    accessor: "body",
                },
            ],
        }
    ], []);

    if (loading) return (<p>Loading...</p>);
    return error
        ? (<p>error.message</p>)
        : value
        ? (<Table columns={columns} data={value} />)
        : null;
};
