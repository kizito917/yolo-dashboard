// External imports
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Internal imports
import Layout from '../../../components/Layout/Layout';
import Button from '../../../components/Inputs/Button';
import { options } from '../../../utils/constant';
import { fetchSingleUser } from '../../../services/users';
  
export default function UserDetails() {
    const [userData, setUserData] = useState({});
    const [dataLoading, setDataLoading] = useState(true);
    const { id } = useParams();

    // Function to fetch data
    useEffect(() => {
        const fetchData = async () => {
          // Extract data from API and check status returned
          const {status, data} = await fetchSingleUser(id);
          if(status !== 200) {
            setDataLoading(false);
            setUserData({});
            return;
          }
      
          setDataLoading(false);
          setUserData(data);
        }
      
        setDataLoading(true);
        fetchData();
    }, [id]);

    return (
        <Layout>
            <div>
                <h1 className="text-2xl text-gray-800 subpixel-antialiased font-bold">User Details</h1>
                <p className="text-small mt-2">The informations below are the user details for <strong>{userData.name}</strong>.</p>
                {
                    dataLoading ? <div className="border border-whitesmoke-500 shadow-xl p-7 w-default text-center mt-24">
                        <p>Loading data...</p>
                    </div> :
                    <div className="border border-whitesmoke-500 shadow-xl p-7 w-default mt-4">
                        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                            <div className="col-span-6 pb-4">
                                <div className="flex gap-4 mb-4">
                                    <h3>Name:</h3>
                                    <p>{userData.name}</p>
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <h3>Email:</h3>
                                    <p>{userData.email}</p>
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <h3>Company:</h3>
                                    <p>{userData.companyName}</p>
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <h3>Date of account creation:</h3>
                                    <p>{new Date(userData.createdAt).toLocaleString('en-US', options)}</p>
                                </div>
                            </div>
                        </div>
                        <h4 className="mt-2 mb-4 text-bold text-small font-extrabold">Address detailss</h4>
                        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                            <div className="col-span-3 pb-4">
                                <div className="flex gap-4 mb-4">
                                    <h3>Street:</h3>
                                    <p>{userData.address?.street}</p>
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <h3>City:</h3>
                                    <p>{userData.address?.city}</p>
                                </div>
                            </div>
                            <div className="col-span-3 mr-4">
                                <div className="flex gap-4 mb-4">
                                    <h3>State:</h3>
                                    <p>{userData.address?.state}</p>
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <h3>Postal code:</h3>
                                    <p>{userData.address?.postalCode}</p>
                                </div>
                            </div>
                            <Button btnText="Go back" btnType="link" link="/users" />
                        </div>
                    </div>
                }
            </div>
        </Layout>
    )
}
