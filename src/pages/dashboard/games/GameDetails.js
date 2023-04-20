// External imports
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Internal imports
import Layout from '../../../components/Layout/Layout';
import Button from '../../../components/Inputs/Button';
import { options } from '../../../utils/constant';
import { fetchSingleGame } from '../../../services/games';

export default function GameDetails() {
    const [gameData, setGameData] = useState({});
    const [dataLoading, setDataLoading] = useState(true);
    const { id } = useParams();

    // Function to fetch data
    useEffect(() => {
        const fetchData = async () => {
          // Extract data from API and check status returned
          const {status, data} = await fetchSingleGame(id);
          if(status !== 200) {
            setDataLoading(false);
            setGameData({});
            return;
          }
      
          setDataLoading(false);
          setGameData(data);
        }
      
        setDataLoading(true);
        fetchData();
    }, [id]);

    return (
        <Layout>
            <div>
                <h1 className="text-2xl text-gray-800 subpixel-antialiased font-bold">Game Details</h1>
                <p className="text-small mt-2">The informations below are the game details for <strong>{gameData.name}</strong>.</p>
                {
                    dataLoading ? <div className="border border-whitesmoke-500 shadow-xl p-7 w-default text-center mt-24">
                        <p>Loading data...</p>
                    </div> :
                    <div className="border border-whitesmoke-500 shadow-xl p-7 w-default mt-4">
                        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                            <div className="col-span-6 pb-4">
                                <div className="flex gap-4 mb-4">
                                    <h3>Name:</h3>
                                    <p>{gameData.name}</p>
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <h3>Category:</h3>
                                    <p>{gameData.category}</p>
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <h3>Publisher:</h3>
                                    <p>{gameData.publisher}</p>
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <h3>Date of creation:</h3>
                                    <p>{new Date(gameData.createdAt).toLocaleString('en-US', options)}</p>
                                </div>
                            </div>
                        </div>
                        <h4 className="mt-2 mb-4 text-bold text-small font-extrabold">Game Configurations</h4>
                        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                            <div className="col-span-3 pb-4">
                                <div className="flex gap-4 mb-4">
                                    <h3>Platform:</h3>
                                    <p>{gameData.configurations?.platform}</p>
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <h3>Language:</h3>
                                    <p>{gameData.configurations?.language}</p>
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <h3>Sound:</h3>
                                    <p>{gameData.configurations?.sound}</p>
                                </div>
                            </div>
                            <div className="col-span-3 mr-4">
                                <div className="flex gap-4 mb-4">
                                    <h3>Players:</h3>
                                    <p>{gameData.configurations?.players}</p>
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <h3>Difficulty:</h3>
                                    <p>{gameData.configurations?.difficulty}</p>
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <h3>Graphics:</h3>
                                    <p>{gameData.configurations?.graphics}</p>
                                </div>
                            </div>
                            <Button btnText="Go back" btnType="link" link="/games" />
                        </div>
                    </div>
                }
            </div>
        </Layout>
    )
}
