// External imports
import {useEffect, useState} from 'react';
import AddIcon from '@mui/icons-material/Add';

// Internal imports
import Layout from '../../../components/Layout/Layout';
import Table from '../../../components/DataDisplay/Tables';
import Button from '../../../components/Inputs/Button';
import { fetchUsersData } from '../../../services/users';


export default function Games() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Retrieve games data from API
    const fetchData = async () => {
        // Check if status is OK and set games data retrieved tio state value
        const {status, data} = await fetchUsersData();
        if(status !== 200) {
            setUsers([]);
            return;
        }
        setUsers(data);
        setIsLoading(false)
    }

    useEffect(() => {
        // Call function to fetch data
        setIsLoading(true);
        fetchData();
    }, [])

    return (
        <Layout>
            <div>
                <h1 className="text-2xl subpixel-antialiased font-bold">All Users</h1>
                <div className="mt-2 mb-4 w-64 float-right mr-5">
                    <Button btnText="Add New user" startIcon={<AddIcon />} link="/add-user" btnType="link" />
                </div>
                <div className="mt-4 w-default">
                    <Table rows={users} editUrl="/edit-user" viewUrl="/user" componentType="users" dataLoading={isLoading} />
                </div>
            </div>
        </Layout>
    )
}
