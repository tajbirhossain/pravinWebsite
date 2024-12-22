import React, { useEffect, useState } from 'react'
import '../components/styles/promotion.css'
import Header from '../components/Header'
import Footer from '../components/footer'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import axios from 'axios';


const Promotion = () => {
    const [storeData, setStoreData] = useState([])
    const [inpVal, setInpVal] = useState("")
    const [isCopied, setIsCopied] = useState(false);
    const [isCopied2, setIsCopied2] = useState(false);
    const [isCopied3, setIsCopied3] = useState(false);
    const [isCopied4, setIsCopied4] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
        axios.get(process.env.REACT_APP_ALL_REPORTS_API).then(res => {
            //console.log(res.data);
            setStoreData(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])


    const handleSetVal = (e) => {
        setInpVal(e.target.value)
    }

    const handleCopyClick = async (link) => {
        try {
            await navigator.clipboard.writeText(link);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1000);
        } catch (error) {
            console.error('Failed to copy: ', error);
        }
    };
    const handleCopyClick2 = async (link) => {
        try {
            await navigator.clipboard.writeText(link);
            setIsCopied2(true);
            setTimeout(() => {
                setIsCopied2(false);
            }, 1000);
        } catch (error) {
            console.error('Failed to copy: ', error);
        }
    };
    const handleCopyClick3 = async (link) => {
        try {
            await navigator.clipboard.writeText(link);
            setIsCopied3(true);
            setTimeout(() => {
                setIsCopied3(false);
            }, 1000);
        } catch (error) {
            console.error('Failed to copy: ', error);
        }
    };
    const handleCopyClick4 = async (link) => {
        try {
            await navigator.clipboard.writeText(link);
            setIsCopied4(true);
            setTimeout(() => {
                setIsCopied4(false);
            }, 1000);
        } catch (error) {
            console.error('Failed to copy: ', error);
        }
    };

    return (
        <div className='promotion'>
            <Header isOnPlace={false} inpVal={inpVal} handleSetVal={handleSetVal} />
            <main>
                <div className="container">
                    <h1>All Reports Links</h1>
                    <div className="promotionItemWrap">
                        {
                            storeData.map((val, i) => {
                                const reportLink = `https://absolutemarketresearch.com/report-details/${val.reportTitle.split("Market")[0].replaceAll(" ", "-") + "Market"}/${val.reportId}/overview`
                                const reportLink2 = `https://absolutemarketresearch.com/report-details/${val.reportTitle.split("Market")[0].replaceAll(" ", "-") + "Market"}/${val.reportId}/TOC`
                                const reportLink3 = `https://absolutemarketresearch.com/report-details/${val.reportTitle.split("Market")[0].replaceAll(" ", "-") + "Market"}/${val.reportId}/request-sample`
                                const reportLink4 = `https://absolutemarketresearch.com/purchase/${val.reportTitle.split("Market")[0].replaceAll(" ", "-") + "Market"}?report-id=${val.reportId}`
                                return (
                                    <div className='promo-report-box' key={i}>
                                        <div className='promo-report-header'>
                                            <span>{val.reportId} - {val.reportCategory} - {val.reportTitle}</span>
                                        </div>
                                        <div className='promo-report-content'>
                                            <a href={reportLink} target='_blank' rel='noopener noreferrer'>
                                                {reportLink}
                                            </a>
                                            <button onClick={() => handleCopyClick(reportLink)} className='copy-button'>
                                                {isCopied ? 'Copied!' : <FileCopyIcon />}
                                            </button>
                                        </div>
                                        <div className='promo-report-content'>
                                            <a href={reportLink2} target='_blank' rel='noopener noreferrer'>
                                                {reportLink2}
                                            </a>
                                            <button onClick={() => handleCopyClick2(reportLink2)} className='copy-button'>
                                                {isCopied2 ? 'Copied!' : <FileCopyIcon />}
                                            </button>
                                        </div>
                                        <div className='promo-report-content'>
                                            <a href={reportLink3} target='_blank' rel='noopener noreferrer'>
                                                {reportLink3}
                                            </a>
                                            <button onClick={() => handleCopyClick3(reportLink3)} className='copy-button'>
                                                {isCopied3 ? 'Copied!' : <FileCopyIcon />}
                                            </button>
                                        </div>
                                        <div className='promo-report-content'>
                                            <a href={reportLink4} target='_blank' rel='noopener noreferrer'>
                                                {reportLink4}
                                            </a>
                                            <button onClick={() => handleCopyClick4(reportLink4)} className='copy-button'>
                                                {isCopied4 ? 'Copied!' : <FileCopyIcon />}
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Promotion