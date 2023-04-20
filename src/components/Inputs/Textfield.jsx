// External imports
import { InputLabel, FormControl, Input } from '@mui/material';

export default function TextField({inputType, label, value, onChange, nameAttr}) {
    return (
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">{label}</InputLabel>
                <Input
                required={true}
                id="standard-adornment-amount"
                type={inputType}
                value={value}
                name={nameAttr}
                onChange={onChange}
            />
        </FormControl>
    )
}
