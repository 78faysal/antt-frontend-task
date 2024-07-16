import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const LookingForJob = ({ selectedDegree, handleChange, collegeDegree, graduationYear, selectedGraduationYear, setCollegeName }) => {
    return (
        <>
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="College Name"
                        multiline
                        maxRows={4}
                        onChange={(e) => setCollegeName(e.target.value)}
                    />

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                        <InputLabel id="demo-select-small-label">Degree</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={selectedDegree}
                            label="Degree"
                            onChange={handleChange}
                            name="degree"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {collegeDegree.map((degree, idx) => (
                                <MenuItem key={idx} value={degree}>
                                    {degree}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                        <InputLabel id="demo-select-small-label">Graduation Year</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={selectedGraduationYear}
                            label="Graduation Year"
                            onChange={handleChange}
                            name="graduationYear"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {graduationYear.map((year, idx) => (
                                <MenuItem key={idx} value={year}>
                                    {year}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
        </>
    )
}

export default LookingForJob;