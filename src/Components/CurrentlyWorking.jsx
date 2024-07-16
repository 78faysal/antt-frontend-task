import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const CurrentlyWorking = ({selectedExperience, handleChange, experiences, selectedJobTitle, occupations, setCompanyName}) => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Company Name"
                    multiline
                    maxRows={4}
                    onChange={e => setCompanyName(e.target.value)}
                />

                <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                    <InputLabel id="demo-select-small-label">Experience</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={selectedExperience}
                        label="Experience"
                        onChange={handleChange}
                        name="experience"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {experiences.map((experience, idx) => (
                            <MenuItem key={idx} value={experience}>
                                {experience}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                    <InputLabel id="demo-select-small-label">Job Title</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={selectedJobTitle}
                        label="Job Title"
                        onChange={handleChange}
                        name="jobTitle"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {occupations.map((occupation, idx) => (
                            <MenuItem key={idx} value={occupation}>
                                {occupation}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default CurrentlyWorking;