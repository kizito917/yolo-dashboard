// External imports
import {useEffect, useState} from 'react';
import AddIcon from '@mui/icons-material/Add';

// Internal imports
import Layout from '../../../components/Layout/Layout';
import Table from '../../../components/DataDisplay/Tables';
import Button from '../../../components/Inputs/Button';
import { fetchGamesData } from '../../../services/games';

export default function Games() {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Retrieve games data from API
    const fetchData = async () => {
        // Check if status is OK and set games data retrieved tio state value
        const {status, data} = await fetchGamesData();
        if(status !== 200) {
            setGames([]);
            return;
        }
        setGames(data);
        setIsLoading(false)
    }

    useEffect(() => {
        // Call function to fetch data
        setIsLoading(true);
        fetchData();
    }, []);

    return (
        <Layout>
            <div>
                <h1 className="text-2xl text-gray-800 subpixel-antialiased font-bold">All Games</h1>
                <div className="mt-2 mb-4 w-64 float-right mr-5">
                    <Button btnText="Add New Game" startIcon={<AddIcon />} link="/add-game" btnType="link" />
                </div>
                <div className="mt-4 w-default">
                    <Table rows={games} editUrl="/edit-game" viewUrl="/game" componentType="games" dataLoading={isLoading} />
                </div>
            </div>
        </Layout>
    )
}
