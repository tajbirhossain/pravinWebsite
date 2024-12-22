import React from 'react'
import './styles/singleReportItem.css'
import { Link } from 'react-router-dom'

const SingleReportItem = ({ val, i }) => {
    // console.log(val.reportTitle.split(",")[0].replaceAll(" ", "-"));
    console.log();
    return (
        <Link to={`/${val.reportTitle.split("Market")[0].replaceAll(" ", "-") + "Market"}/${val.reportId}/overview`} key={i}>
            <div className="singleReport">
                <div className="repTop">
                    <h2>{val.reportTitle}</h2>
                    <div className='repDescSm' dangerouslySetInnerHTML={{ __html: val.reportDescription }} />
                </div>
                <div className="reportBottom">
                    <div className="repBottomSingle">
                        <span className="repBottomTitle">Report Id:</span>
                        <h2 className='repId'>{val.reportId}</h2>
                    </div>
                    <div className="repBottomSingle">
                        <span className="repBottomTitle">Published On:</span>
                        <h2 className='repId'>{val.publishedOn}</h2>
                    </div>
                    <div className="repBottomSingle">
                        <span className="repBottomTitle">Price For Single User:</span>
                        <h2>$ {val.priceForSingleUser}</h2>
                    </div>
                    <div className="repBottomSingle">
                        <span className="repBottomTitle">Report Pages:</span>
                        <h2>{val.reportPages}</h2>
                    </div>
                    <div className="repBottomSingle">
                        <span className="repBottomTitle">Report Category:</span>
                        <h2>{val.reportCategory}</h2>
                    </div>
                    {/* <div className="repBottomSingle">
                        <div className="starRating">
                            <div className="ratingWrap" style={{ width: `${((100 * val.editorRating) / 5)}%` }}>
                                <span>★★★★★</span>
                            </div>
                            <div className="emptyRating">
                                <span>★★★★★</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Link>
    )
}

export default SingleReportItem