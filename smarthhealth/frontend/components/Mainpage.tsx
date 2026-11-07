import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

import { useState, type SubmitEvent } from 'react';

import ConditionResult from '../components/ConditionResult';
import type { Condition } from '../src/types';

export default function Mainpage() {
    const [name, setName] = useState("");
    const [result, setResult] = useState<Condition | null>(null);
    // const [submittedSearch, setSubmittedSearch] = useState<{
    //     name: string;
    //     timestamp: string;
    // } | null>(null);

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {e.preventDefault();

        if (!name.trim()) {
            alert("Name is required")
            return;
        }

        setResult({
            name: name.trim(),
            causes: "Sample causes (placeholder)",
            symptoms: "Sample (placeholder)",
            treatment: "sample",
        });
        // setSubmittedSearch({
        //     name: name.trim(),
        //     timestamp: new Date().toLocaleDateString(),
        // });

        setName("");
    }

    return (
        <Stack spacing={3}>
            <Stack
                component="form"
                onSubmit={handleSubmit}
                direction="row"
                spacing={2}
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Disease or condition"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button type="submit" variant="contained" size="small">Search</Button>
            </Stack>

            {result && <ConditionResult condition={result} />}
        </Stack>
    );
}