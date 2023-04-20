// External imports
import { useState } from 'react';
import { useNavigate } from 'react-router';
import CheckIcon from '@mui/icons-material/Check';

// Internal imports
import TextField from '../Inputs/Textfield';
import Button from '../Inputs/Button';
import Notifier from '../Feedback/Alert';
import { updateUser, addUser } from '../../services/users';

export default function UserForm({initialData, request}) {
    const [formData, setFormData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [alertData, setAlertData] = useState([]);

    // Setup use navigate instance
    const navigate = useNavigate();

    // Handle input change for all text fields
    const handleChange = (event) => {
        // Extract name and value from event property and set to formData
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    
    // Handle input change for all address text fields
    const handleAddressChange = (event) => {
        // Extract name and value from event property and set to formData
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          address: {
            ...prevFormData.address,
            [name]: value,
          },
        }));
    };

    // Update details of user
    const updateUserData = async () => {
        try {
            // Retrieve status from update request and check status of request
            const status = await updateUser(formData);
            if(status !== 200) {
                // Render error alert and message to user if update not successful
                setAlertData(['error', 'Unable to update user data']);
                setIsLoading(false);
                setTimeout(() => { setAlertData([]); }, 2000);
                return;
            }

            // Display success message and redirect user to all games page
            setIsLoading(false);
            setAlertData(['success', 'User Data updated successfully']);
            setTimeout(() => { 
                setAlertData([]);
                navigate('/users');
            }, 2000);
        } catch (err) {
            setAlertData(['error', 'Unable to update user data']);
            setIsLoading(false);
            setTimeout(() => { setAlertData([]); }, 2000);
        }
    }

    // Add new user data
    const addNewUserData = async () => {
        try {
            // Retrieve status from update request and check status of request
            const status = await addUser(formData);
            if(status !== 200) {
                // Render error alert and message to user if update not successful
                setAlertData(['error', 'Unable to add new user']);
                setIsLoading(false);
                setTimeout(() => { setAlertData([]); }, 2000);
                return;
            }

            // Display success message and redirect user to all games page
            setIsLoading(false);
            setAlertData(['success', 'User added successfully']);
            setTimeout(() => { 
                setAlertData([]);
                navigate('/users');
            }, 2000);
        } catch (err) {
            setAlertData(['error', 'Unable to add new user']);
            setIsLoading(false);
            setTimeout(() => { setAlertData([]); }, 2000);
        }
    }

    // Handle submit button click 
    const handleClick = () => {
        setIsLoading(true);
        if(request === 'edit') {
            updateUserData();
        } else if (request === 'add') {
            addNewUserData();
        }
    }

    return (
        <div className="border border-whitesmoke-500 shadow-xl p-7 w-default">
            {
                alertData.length > 0 && <Notifier severity={alertData[0]} message={alertData[1]}  />
            }
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                <div className="col-span-3 pb-4">
                    <TextField inputType="text" nameAttr="name" label="Name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="col-span-3 mr-4">
                    <TextField inputType="text" nameAttr="companyName" label="Company Name" value={formData.companyName} onChange={handleChange} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
                <div className="col-span-1 pb-4">
                    <TextField inputType="email" nameAttr="email" label="Email" value={formData.email} onChange={handleChange} />
                </div>
            </div>
            <h4 className="mt-4 text-bold ml-1 text-small font-extrabold">Address Details</h4>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                <div className="col-span-3 pb-4">
                    <TextField inputType="text" nameAttr="street" label="Street" value={formData.address?.street} onChange={handleAddressChange} />
                    <TextField inputType="text" nameAttr="state" label="State" value={formData.address?.state} onChange={handleAddressChange} />
                </div>
                <div className="col-span-3 mr-4">
                    <TextField inputType="text" nameAttr="city" label="City" value={formData.address?.city} onChange={handleAddressChange} />
                    <TextField inputType="text" nameAttr="postalCode" label="Postal Code" value={formData.address?.postalCode} onChange={handleAddressChange} />
                </div>
                <Button btnText="Submit" btnType="form" startIcon={<CheckIcon />} isLoading={isLoading} onClick={handleClick} />
                <Button btnText="Go back" btnType="link" link="/users" />
            </div>
        </div>
    )
}
