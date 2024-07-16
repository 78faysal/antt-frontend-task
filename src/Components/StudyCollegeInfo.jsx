import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const StudyCollegeInfo = ({selectedDegree, handleChange, collegeDegree, gratuationYear, selectedGratuationYear, setCollegeName}) => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="College Name"
                    multiline
                    maxRows={4}
                    onChange={(e) => setCollegeName(e.target.value)}
                />


                <FormControl sx={{ m: 1, minWidth: 120, }} size="medium">
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

                <FormControl sx={{ m: 1, minWidth: 120, }} size="medium">
                    <InputLabel id="demo-select-small-label">Gratuation Year</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={selectedGratuationYear}
                        label="Grade"
                        onChange={handleChange}
                        name="graduationYear"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {gratuationYear.map((year, idx) => (
                            <MenuItem key={idx} value={year}>
                                {year}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default StudyCollegeInfo;