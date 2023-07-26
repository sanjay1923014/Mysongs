import React from 'react'
import {Stack} from '@mui/material';
import Header from '../../assets/Heading';
import axios from "axios";
import {useState, useEffect} from 'react';
import Form from '../../assets/Form';
import SongCard from '../../assets/Card';

const Home = () => {
    const [search, setSearch] = useState("");
    useEffect(() => {
        handleApi();
    }, [search])
    let dummy = [
        1,
        2,
        3,
        4,
        5,
        6
    ]

    const [allSongs, setAllSongs] = useState(dummy);
    const handleApi = async () => {


        if (search) {
            const res = await axios(`https://api.lyrics.ovh/suggest/${search}`)
            setAllSongs(res.data.data);
        }

    };
    return (
        <Stack>
            <Header/>
            <Form handleApi={handleApi}
                setSearch={setSearch}
                search={search}/>
            <SongCard allSongs={allSongs}/>

        </Stack>
    )
}

export default Home;
