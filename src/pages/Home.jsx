import React, { useEffect, useState } from 'react'
import About from '../components/About';
import Banner from '../components/Banner';
import Featured from '../components/Featured';
import Header from '../components/Header';
import Value from '../components/Value';
import Footer from '../components/footer';
import Industries from '../components/industries';
import Promiss from '../components/promiss';
import '../components/styles/home.css'
import Stick from '../components/Stick';
import axios from 'axios';
import Contact from '../components/Contact';

const Home = () => {
    const [storeSearch, setStoreSearch] = useState([])
    const [inpVal, setInpVal] = useState("")
    const handleSearch = (e) => {
        e.preventDefault()
        inpVal ? axios.get(`${process.env.REACT_APP_SEARCH_BY_TITLE_API}=${inpVal}`).then(res => {
            // console.log(res.data.reports);
            // setStoreSearch(res.data.reports)
            //console.log(res.data);
            setStoreSearch(res.data)
        }).catch(err => {
            console.log(err);
        }) : setStoreSearch([])
    }
    const handleSetVal = (e) => {
        setInpVal(e.target.value)
        e.target.value.trim().length === 0 && setStoreSearch([])
    }
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, [])


    return (
        <div className='home'>
            <Header isOnPlace={false} handleSearch={handleSearch} inpVal={inpVal} handleSetVal={handleSetVal} />
            {/* <Stick /> */}
            <Banner />
            <About />
            <Industries storeSearch={storeSearch} />
            {/* <Promiss /> */}
            {/* <Featured /> */}
            <Value />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home