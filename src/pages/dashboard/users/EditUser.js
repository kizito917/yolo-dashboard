// External imports
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

// Internal imports
import Layout from '../../../components/Layout/Layout';
import UserForm from '../../../components/Forms/UserForm';
import { fetchSingleUser } from '../../../services/users';

export default function EditUser() {
    const [userData, setUserData] = useState({});
    const { id } = useParams();

    // Function to fetch data
    const fetchData = useCallback(async () => {
        // Extract data from API and check status returned
        const {status, data} = await fetchSingleUser(id);
        if(status !== 200) {
            setUserData({});
            return;
        }
    
        setUserData(data);
    }, [id]);
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Layout>
            <div>
                <h1 className="text-2xl text-gray-800 subpixel-antialiased font-bold">Edit User</h1>
                <p className="text-small mt-2">Kindly use the form below to edit user details.</p>
                <div className="mt-4">
                    {
                        Object.hasOwn(userData, 'name') ? <UserForm initialData={userData} request="edit" /> : <p>Loading...</p>
                    }
                </div>
            </div>
        </Layout>
    )
}
