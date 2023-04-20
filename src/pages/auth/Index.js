// External imports
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

// Internal imports
import './auth.css';
import logo from '../../assets/img/logo.svg';
import TextField from '../../components/Inputs/Textfield';
import Button from '../../components/Inputs/Button';
import Notifier from '../../components/Feedback/Alert';
import { callMockEndpoint } from '../../services/users';

export default function Login() {
    // Use state storage for data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [alertData, setAlertData] = useState([]);

    // Setup use navigate instance
    const navigate = useNavigate();

    useEffect(() => {
        callMockEndpoint();
    }, [])

    // Handle sign in functionality
    const handleClick = () => {
        // Check if form fields are empty and return feedback based on condition met
        setIsLoading(true);
        if (!email || !password) {
            setIsLoading(false);
            setAlertData(['error', 'Kindly fill all input fields.']);
            setTimeout(() => { setAlertData([]); }, 2000);
            return;
        }

        setIsLoading(false);
        setAlertData(['success', 'Login successful! Redirecting...']);
        setTimeout(() => { 
            setAlertData([]);
            navigate('/dashboard');
        }, 2000);
    }

    return (
        <>
            <section className="h-screen">
                <div>
                    <div className="content-area mt-14 pt-12 bg-white w-11/12 rounded-md lg:w-2/6">
                        <div className="text-center">
                            <img src={logo} className="logo-img mb-2" width="50" alt="logo" />
                            <h4 className="text-bold mt-4">Sign in to Dashboard</h4>
                        </div>
                        <div className="form-area text-left px-12 mt-7">
                            {
                                alertData.length > 0 && <Notifier severity={alertData[0]} message={alertData[1]} />
                            }
                            <form>
                                <div className="form-group pb-4">
                                    <TextField inputType="text" label="Email" nameAttr="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div className="form-group pb-4">
                                    <TextField inputType="password" label="Password" nameAttr="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                                </div>
                                <div className="form-group mt-4 mb-4">
                                    <small className="text-primary">Forgot password?</small>
                                </div>
                                <div className="form-group pb-4">
                                    <Button btnText="Sign In" btnType="form" isLoading={isLoading} onClick={handleClick} />
                                </div>
                            </form>
                            <h6 className="text-center text-sm pb-2 pt-4">New user? <b className="text-primary">Sign up to get started</b></h6>
                            <div className="flex flex-row mt-16 pb-20">
                                <div className="basis-1/2">
                                    <small>Need help?</small>
                                </div>
                                <div className="basis-1/4">
                                    <small>Privacy</small>
                                </div>
                                <div className="basis-1/4">
                                    <small>Terms & Policy</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
