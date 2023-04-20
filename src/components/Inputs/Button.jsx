// External imports
import { useNavigate } from 'react-router';
import LoadingButton from '@mui/lab/LoadingButton';

export default function Button({btnText, btnType, startIcon, link, isLoading, onClick}) {
    // Setup use navigate instance
    const navigate = useNavigate();
    const handleNavigate = (link) => {
        navigate(link)
    }
    
    return (
        <>
            {btnType === 'form' ? 
            <LoadingButton variant="contained" loading={isLoading} fullWidth={true} size="large" startIcon={startIcon} onClick={onClick}>{btnText}</LoadingButton> : 
            <LoadingButton variant="contained" fullWidth={true} size="large" startIcon={startIcon} onClick={() => handleNavigate(link)}>{btnText}</LoadingButton>}
        </>
    )
}
