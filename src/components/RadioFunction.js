import { Radio } from '@mui/material';
import React, { Fragment, useState } from 'react'
import { Input } from 'reactstrap';

const RadioFunction = () => {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        toggleSow(false)
    };
    const [show, setShow] = useState(false)
    const toggleSow = () => {
        setShow(!show)
    }
    const [showComponet, setshowComponet] = useState(false)
    const toggleComponents = () => {
        setshowComponet(!showComponet)
    }


    const options = [
        { value: "LRbC", label: "LRbC" },
        { value: "PRbc", label: "PRbc" },
        { value: "Hello", label: "Hello" },
        { value: "hi", label: "hi" },
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);
    console.log("selectedOptions", selectedOptions)
    const handleOptionChange = (value) => {
        let updatedOptions;

        if (selectedOptions.includes(value)) {
            updatedOptions = selectedOptions.filter(option => option !== value);
        } else {
            if (value === "LRbC") {
                updatedOptions = selectedOptions.filter(option => option !== "PRbc");
                updatedOptions.push("LRbC");
            } else if (value === "PRbc") {
                updatedOptions = selectedOptions.filter(option => option !== "LRbC");
                updatedOptions.push("PRbc");
            } else {
                updatedOptions = [...selectedOptions, value];
            }
        }

        setSelectedOptions(updatedOptions);
    };
    //=========== main_return_function =============//
    return (
        <Fragment>
            <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'A' }}
            />Whole Blood
            <Radio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
            />Componet

            <div>
                {selectedValue === 'a' && <>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Input
                            type='search'
                            placeholder='A serach Type'
                            onClick={toggleSow}
                        />
                    </div>
                </>
                }
                {show ?
                    <>Components 1</>
                    : null
                }
                {selectedValue === 'b' && <>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Input
                            type='search'
                            placeholder='B serach Type'
                            onClick={toggleComponents}
                        />
                    </div>
                </>}
                {showComponet ?
                    <>
                        <div className="options">
                            <ul>
                                {options.map((option, index) => (
                                    <li key={index}>
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                value={option.value}
                                                checked={selectedOptions.includes(option.value)}
                                                onChange={() => handleOptionChange(option.value)}
                                            />
                                            {option.label}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            Selected values: {selectedOptions.join(', ')}
                        </div>
                    </>
                    : null
                }
            </div>
        </Fragment>
    )
}

export default RadioFunction
