// External imports
import { InputLabel, FormControl, MenuItem, Select } from '@mui/material';

export default function SelectField({data, label, selected, onChange, nameAttr}) {
    return (
        <FormControl variant="standard" sx={{ m: 1 }} fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selected}
                onChange={onChange}
                name={nameAttr}
            >
                {
                    data?.map((value) => {
                        return (
                            <MenuItem value={value} key={value}>{value}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}
