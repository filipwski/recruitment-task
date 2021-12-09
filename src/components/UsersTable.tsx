import { useMemo } from 'react';
import { useAsync } from 'react-use';
import { getUsers } from '../clients/apiClient';
import { Table } from './Table';

export const UsersTable = () => {
  const { error, loading, value } = useAsync(getUsers, []);

  const columns = useMemo(() => [
    {
      Header: "Basic data",
      columns: [
        {
          Header: "Id",
          accessor: "id",
        },
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Username",
          accessor: "username",
        },
        {
          Header: "Email",
          accessor: "email",
        },
        {
          Header: "Phone",
          accessor: "phone",
        },
        {
          Header: "Website",
          accessor: "website",
        },
      ],
    },
    {
      Header: 'Address',
      columns: [
        {
          Header: 'Street',
          accessor: 'address.street',
        },
        {
          Header: 'Suite',
          accessor: 'address.suite',
        },
        {
          Header: 'City',
          accessor: 'address.city',
        },
        {
          Header: 'Zip Code',
          accessor: 'address.zipcode',
        },
        {
          Header: 'Latitude',
          accessor: 'address.geo.lat',
        },
        {
          Header: 'Longitude',
          accessor: 'address.geo.lng',
        },
      ],
    },
    {
      Header: 'Company data',
      columns: [
        {
          Header: 'Name',
          accessor: 'company.name'
        },
        {
          Header: 'Catch phrase',
          accessor: 'company.catchPhrase'
        },
        {
          Header: 'Services',
          accessor: 'company.bs'
        },
      ],
    },
  ], []);

  if (loading) return (<p>Loading...</p>);
  return error
    ? (<p>error.message</p>)
    : value
      ? (<Table columns={columns} data={value} />)
      : null;
};
