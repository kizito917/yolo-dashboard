// External imports
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

// Internal imports
import Layout from '../../../components/Layout/Layout';
import GameForm from '../../../components/Forms/GameForm';
import { fetchSingleGame } from '../../../services/games';

export default function AddGame() {
    const [gameData, setGameData] = useState({});
    const { id } = useParams();

    // Function to fetch data
    const fetchData = useCallback(async () => {
        // Extract data from API and check status returned
        const {status, data} = await fetchSingleGame(id);
        if(status !== 200) {
            setGameData({});
            return;
        }
    
        setGameData(data);
    }, [id]);
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Layout>
            <div>
                <h1 className="text-2xl text-gray-800 subpixel-antialiased font-bold">Edit Game</h1>
                <p className="text-small mt-2">Kindly use the form below to edit game data.</p>
                <div className="mt-4">
                    {
                        Object.hasOwn(gameData, 'name') ? <GameForm initialData={gameData} request="edit" /> : <p>Loading...</p>
                    }
                </div>
            </div>
        </Layout>
    )
}
