// External imports
import { useState } from 'react';
import { useNavigate } from 'react-router';
import CheckIcon from '@mui/icons-material/Check';

// Internal imports
import TextField from '../Inputs/Textfield';
import SelectField from '../Inputs/Select';
import Button from '../Inputs/Button';
import Notifier from '../Feedback/Alert';
import { gameCategory, playerType, gameDifficulty, language} from '../../utils/constant';
import { updateGame, addGame } from '../../services/games';

export default function GameForm({initialData, request}) {
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
            [name]: [name] === 'date' ? new Date(value) : value,
        }));
    };
    
    // Handle input change for all configuration text fields
    const handleConfigurationsChange = (event) => {
        // Extract name and value from event property and set to formData
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          configurations: {
            ...prevFormData.configurations,
            [name]: value,
          },
        }));
    };

    // Update details of game
    const updateGameData = async () => {
        try {
            // Retrieve status from update request and check status of request
            const status = await updateGame(formData);
            if(status !== 200) {
                // Render error alert and message to user if update not successful
                setAlertData(['error', 'Unable to update game data']);
                setIsLoading(false);
                setTimeout(() => { setAlertData([]); }, 2000);
                return;
            }

            // Display success message and redirect user to all games page
            setIsLoading(false);
            setAlertData(['success', 'Game Data updated successfully']);
            setTimeout(() => { 
                setAlertData([]);
                navigate('/games');
            }, 2000);
        } catch (err) {
            setAlertData(['error', 'Unable to update game data']);
            setIsLoading(false);
            setTimeout(() => { setAlertData([]); }, 2000);
        }
    }

    // Add new game data
    const addNewGameData = async () => {
        try {
            // Retrieve status from update request and check status of request
            const status = await addGame(formData);
            if(status !== 200) {
                // Render error alert and message to user if update not successful
                setAlertData(['error', 'Unable to add new game']);
                setIsLoading(false);
                setTimeout(() => { setAlertData([]); }, 2000);
                return;
            }

            // Display success message and redirect user to all games page
            setIsLoading(false);
            setAlertData(['success', 'Game added successfully']);
            setTimeout(() => { 
                setAlertData([]);
                navigate('/games');
            }, 2000);
        } catch (err) {
            setAlertData(['error', 'Unable to add new game']);
            setIsLoading(false);
            setTimeout(() => { setAlertData([]); }, 2000);
        }
    }

    // Handle submit button click 
    const handleClick = () => {
        setIsLoading(true);
        if(request === 'edit') {
            updateGameData();
        } else if (request === 'add') {
            addNewGameData();
        }
    }

    return (
        <div className="border border-whitesmoke-500 shadow-xl p-7 w-default">
            {
                alertData.length > 0 && <Notifier severity={alertData[0]} message={alertData[1]} />
            }
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                <div className="col-span-3 pb-4">
                    <TextField inputType="text" label="Name" nameAttr="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="col-span-3 mr-4">
                    <TextField inputType="text" label="Publisher" nameAttr="publisher" value={formData.publisher} onChange={handleChange} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
                <div className="col-span-1 pb-4">
                    <SelectField label="Category" nameAttr="category" data={gameCategory} selected={formData.category} onChange={handleChange} />
                </div>
            </div>
            <h4 className="mt-4 text-bold ml-1 text-small font-extrabold">Configurations</h4>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                <div className="col-span-3 pb-4">
                    <TextField inputType="text" label="Platform" nameAttr="platform" value={formData.configurations?.platform} onChange={handleConfigurationsChange} />
                    <SelectField label="Player type" nameAttr="players" data={playerType} selected={formData.configurations?.players} onChange={handleConfigurationsChange} />
                    <SelectField label="Difficulty" nameAttr="difficulty" data={gameDifficulty} selected={formData.configurations?.difficulty} onChange={handleConfigurationsChange} />
                </div>
                <div className="col-span-3 mr-4">
                    <TextField inputType="text" label="Graphics" nameAttr="graphics" value={formData.configurations?.graphics} onChange={handleConfigurationsChange} />
                    <TextField inputType="text" label="Sound" nameAttr="sound" value={formData.configurations?.sound} onChange={handleConfigurationsChange} />
                    <SelectField label="Language" nameAttr="language" data={language} selected={formData.configurations?.language} onChange={handleConfigurationsChange} />
                </div>
                <Button btnText="Submit" btnType="form" startIcon={<CheckIcon />} isLoading={isLoading} onClick={handleClick} />
                <Button btnText="Go back" btnType="link" link="/games" />
            </div>
        </div>
    )
}
