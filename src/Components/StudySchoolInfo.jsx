import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const StudySchoolInfo = ({selectedGrade, handleChange, schoolGrades, setSchoolName}) => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    id="outlined-password-input"
                    label="School Name"
                    type="text"
                    onChange={(e) => setSchoolName(e.target.value)}
                    autoComplete="current-password"
                />


                <FormControl sx={{ m: 1, minWidth: 120, }} size="medium">
                    <InputLabel id="demo-select-small-label">Grades</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={selectedGrade}
                        label="Grade"
                        onChange={handleChange}
                        name="grade"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {schoolGrades.map((grade, idx) => (
                            <MenuItem key={idx} value={grade}>
                                {grade}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default StudySchoolInfo;