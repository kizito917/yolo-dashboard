// External imports
import { useEffect, useState } from 'react';

// Internal imports
import Layout from '../../components/Layout/Layout';
import Calendar from '../../components/Datepickers/Calendar';
import Card from '../../components/Surfaces/Card';
import DataChart from '../../components/DataDisplay/Chart';
import ActivityList from '../../components/DataDisplay/ActivityList';
import { fetchGamesData } from '../../services/games';
import { fetchUsersData } from '../../services/users';

export default function Dashboard() {
    const [gameCount, setGameCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    // Fetch game statistics
    const fetchGame = async () => {
        try {
            // Set game state based on returned status and data
            const {status, data} = await fetchGamesData();
            if (status !== 200) {
                setGameCount(0);
            }

            setGameCount(data.length);
        } catch (err) {
            setGameCount(0);
        }
    }

    // Fetch user statistics
    const fetchUser = async () => {
        try {
            // Set user state based on returned status and data
            const {status, data} = await fetchUsersData();
            if (status !== 200) {
                setUserCount(0);
            }

            setUserCount(data.length);
        } catch (err) {
            console.log('Error fetching user data', err);
            setUserCount(0);
        }
    }

    useEffect(() => {
        fetchGame();
        fetchUser();
    }, [gameCount, userCount])
    return (
        <Layout>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-5">
                <div className="col-span-3 pb-4">
                    <div className="bg-primary rounded-md">
                        <div className="px-7 text-white flex justify-between">
                            <div className="pt-4 pb-4">
                                <h1 className="text-2xl pt-4">Welcome, <b>Yolo Admin</b></h1>
                                <h6 className="text-xs mt-4">You have 10 total users currently and there are currently large games data and configuration to look through. Have a nice day at work!</h6>
                            </div>
                            <div className="pt-2 pb-2">
                                <img src={require('../../assets/img/welcome.png')} alt="welcome img" />
                            </div>
                        </div>
                    </div>

                    {/* Statistics section */}
                    <div className="mt-4">
                        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
                            <Card 
                                svg={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <rect width="50" height="50" rx="8" fill="#5A5EED" fillOpacity="0.1"></rect>
                                    <path d="M26.875 34C26.6253 34 26.3905 33.8755 26.251 33.6663L24.9738 31.75H23.5C23.086 31.75 22.75 31.414 22.75 31C22.75 30.586 23.086 30.25 23.5 30.25H25.375C25.6255 30.25 25.8595 30.3753 25.999 30.5838L26.782 31.7583L28.4538 28.414C28.5768 28.1695 28.822 28.0105 29.0958 28C29.3868 27.9932 29.6268 28.129 29.7678 28.363L31.7996 31.75H33.2501C33.6641 31.75 34.0001 32.086 34.0001 32.5C34.0001 32.914 33.6641 33.25 33.2501 33.25H31.3751C31.1118 33.25 30.8673 33.112 30.7323 32.8863L29.185 30.3078L27.5463 33.586C27.4263 33.8253 27.1885 33.9828 26.9215 33.9993C26.9065 34 26.8908 34 26.875 34Z" fill="#5A5EED"></path>
                                    <path d="M22.75 23.5001C24.8211 23.5001 26.5001 21.8211 26.5001 19.75C26.5001 17.6789 24.8211 16 22.75 16C20.6789 16 19 17.6789 19 19.75C19 21.8211 20.6789 23.5001 22.75 23.5001Z" fill="#5A5EED"></path>
                                    <path d="M21.25 31.0002C21.25 29.7597 22.2595 28.7502 23.5001 28.7502H25.3751C25.7643 28.7502 26.1393 28.8499 26.4686 29.0329L27.1128 27.7436C27.4406 27.0904 28.0646 26.6621 28.7733 26.5481C28.0908 25.6144 26.9958 25.0001 25.7501 25.0001H19.75C17.6793 25.0001 16 26.6794 16 28.7502V31.1877C16 31.4982 16.252 31.7502 16.5625 31.7502H21.388C21.304 31.5147 21.25 31.2642 21.25 31.0002Z" fill="#5A5EED"></path>
                                </svg>} 
                                count={gameCount} 
                                cardTitle="Total Games"  
                            />
                            <Card 
                                svg={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="8" fill="#FFF9EA"></rect>
                                <path opacity="0.5" d="M34 23.2H16V31.3C16 32.0161 16.2845 32.7028 16.7908 33.2092C17.2972 33.7155 17.9839 34 18.7 34H31.3C32.0161 34 32.7028 33.7155 33.2092 33.2092C33.7155 32.7028 34 32.0161 34 31.3V23.2ZM20.5 21.4C20.2613 21.4 20.0324 21.3052 19.8636 21.1364C19.6948 20.9676 19.6 20.7387 19.6 20.5V16.9C19.6 16.6613 19.6948 16.4324 19.8636 16.2636C20.0324 16.0948 20.2613 16 20.5 16C20.7387 16 20.9676 16.0948 21.1364 16.2636C21.3052 16.4324 21.4 16.6613 21.4 16.9V20.5C21.4 20.7387 21.3052 20.9676 21.1364 21.1364C20.9676 21.3052 20.7387 21.4 20.5 21.4ZM29.5 21.4C29.2613 21.4 29.0324 21.3052 28.8636 21.1364C28.6948 20.9676 28.6 20.7387 28.6 20.5V16.9C28.6 16.6613 28.6948 16.4324 28.8636 16.2636C29.0324 16.0948 29.2613 16 29.5 16C29.7387 16 29.9676 16.0948 30.1364 16.2636C30.3052 16.4324 30.4 16.6613 30.4 16.9V20.5C30.4 20.7387 30.3052 20.9676 30.1364 21.1364C29.9676 21.3052 29.7387 21.4 29.5 21.4Z" fill="#FDB557"></path>
                                <path d="M31.3 17.8H30.4V20.5C30.4 20.7387 30.3052 20.9677 30.1364 21.1364C29.9676 21.3052 29.7387 21.4 29.5 21.4C29.2613 21.4 29.0324 21.3052 28.8636 21.1364C28.6948 20.9677 28.6 20.7387 28.6 20.5V17.8H21.4V20.5C21.4 20.7387 21.3052 20.9677 21.1364 21.1364C20.9676 21.3052 20.7387 21.4 20.5 21.4C20.2613 21.4 20.0324 21.3052 19.8636 21.1364C19.6948 20.9677 19.6 20.7387 19.6 20.5V17.8H18.7C17.9839 17.8 17.2972 18.0845 16.7908 18.5909C16.2845 19.0972 16 19.784 16 20.5V23.2H34V20.5C34 19.784 33.7155 19.0972 33.2092 18.5909C32.7028 18.0845 32.0161 17.8 31.3 17.8Z" fill="#FDB557"></path>
                                </svg>} 
                                count={userCount} 
                                cardTitle="Total Customers"  
                            />
                            <Card 
                                svg={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="8" fill="#FA7921" fillOpacity="0.1"></rect>
                                <path d="M25 16C20.05 16 16 20.05 16 25C16 29.95 20.05 34 25 34C29.95 34 34 29.95 34 25C34 20.05 29.95 16 25 16ZM28.87 27.88L24.1 25.27V20.5H25.45V24.46L29.5 26.71L28.87 27.88Z" fill="#FA7921"></path>
                                </svg>} 
                                count={userCount + gameCount} 
                                cardTitle="Total Data"  
                            />
                        </div>
                    </div>
                    <DataChart />
                </div>
                <div className="col-span-2 mr-4 mb-4">
                    <Calendar />
                    <ActivityList />
                </div>
            </div>
        </Layout>
      );
}
