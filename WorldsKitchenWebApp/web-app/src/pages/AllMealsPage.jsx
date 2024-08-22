import {useEffect, useState} from "react";
import {getRequest} from "../services/API_CONFIG";
import ProfileMealsList from "../components/List/ProfileMealsList";
import {Box, Slider} from '@mui/material';
import Button from "../components/Button/Button";

export default function AllMealsPage() {
    const [allMeals, setAllMeals] = useState([]);
    const [name, setName] = useState("")
    const [region, setRegion] = useState(null)
    const [level, setLevel] = useState(null)
    const [caloriesMin, setCaloriesMin] = useState(0)
    const [caloriesMax, setCaloriesMax] = useState(1000)
    const [caloriesRange, setCaloriesRange] = useState([0, 1000]);

    useEffect(() => {
        getRequest('/dishes/all').then(r => {
            setAllMeals(r.data)
        })
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleRegionChange = (event) => {
        setRegion(event.target.value)
    }

    const handleLevelChange = (event) => {
        setLevel(event.target.value)
    }

    const handleSliderChange = (event, newValue) => {
        setCaloriesRange(newValue);
        setCaloriesMin(newValue[0]);
        setCaloriesMax(newValue[1]);
    };

    const handleMealsSearching = () => {
        let url = `/dishes/all?caloriesMin=${caloriesMin}&caloriesMax=${caloriesMax}&name=${name}`
        if (region) url += `&region=${region}`
        if (level) url += `&level=${level}`

        getRequest(url).then(r => {
            setAllMeals(r.data)
        })
    };

    return <>
        <div className={'recipe-container'}>
            <div
                style={{display: 'flex', flexDirection: 'row', marginTop: '1rem', marginBottom: '0.5rem', gap: "1rem"}}>
                <input
                    type={"text"}
                    placeholder={"Enter a meal name..."}
                    value={name}
                    className={'meal-name-input'}
                    onChange={handleNameChange}/>
                <select
                    id="region-select"
                    value={region}
                    onChange={handleRegionChange}
                    className={'meal-number-input'}>
                    <option value="">Select a region</option>
                    <option value="ITALIAN">Italian</option>
                    <option value="POLISH">Polish</option>
                    <option value="ASIAN">Asian</option>
                    <option value="AMERICAN">American</option>
                    <option value="MEXICAN">Mexican</option>
                </select>
                <select
                    id="level-select"
                    value={level}
                    onChange={handleLevelChange}
                    className={'meal-number-input'}>
                    <option value="">Select a difficulty</option>
                    <option value="EASY">Easy</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HARD">Hard</option>
                </select>
                <div className={'meal-number-input'} style={{width: "fit-content"}}>
                    <Box width={200} margin="20px auto">
                        <span id="range-slider">
                            Select Calorie Range
                        </span>
                        <Slider
                            value={caloriesRange}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            min={0}
                            max={2000}
                            sx={{
                                color: '#03a84e',
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#03a84e',
                                },
                                '& .MuiSlider-rail': {
                                    color: 'gray',
                                },
                            }}
                        />
                        <div style={{display: "flex", flexDirection: "row", gap: "1rem"}}>
                            <span>
                                {caloriesRange[0]} kcal
                            </span>
                            <span>
                                {caloriesRange[1]} kcal
                            </span>
                        </div>
                    </Box>
                </div>
                <Button onClick={handleMealsSearching}>
                    Search
                </Button>
            </div>
            <div className={'profile-meals-section'} style={{height: "fit-content"}}>
                <ProfileMealsList
                    mealsList={allMeals}/>
            </div>
        </div>
    </>
}