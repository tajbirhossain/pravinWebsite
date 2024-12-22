import React, { useState } from "react";
import '../components/styles/value.css'

import a from '../images/responsibility.png'
import b from '../images/result.png'
import c from '../images/utilization.png'
import d from '../images/understanding.png'
import e from '../images/people-first.png'
import f from '../images/obligation.png'
import g from '../images/dedication.png'

const Value = () => {


    const [book, setBook] = useState([])

    useState(() => {
        setBook([
            {
                image: g,
                title: "People First",
                desc: "Our customers come first before anything else. Regarding employment, our team/employees are regarded as part of our family and we do what we can to look after them."
            },
            {
                image: a,
                title: "Responsibility",
                desc: "Our customers come first before anything else. Regarding employment, our team/employees are regarded as part of our family and we do what we can to look after them."
            },
            {
                image: d,
                title: "Understanding",
                desc: "Our customers come first before anything else. Regarding employment, our team/employees are regarded as part of our family and we do what we can to look after them."
            },
            {
                image: f,
                title: "Dedication",
                desc: "Our customers come first before anything else. Regarding employment, our team/employees are regarded as part of our family and we do what we can to look after them."
            },
            {
                image: e,
                title: "Obligation",
                desc: "Our customers come first before anything else. Regarding employment, our team/employees are regarded as part of our family and we do what we can to look after them."
            },
            {
                image: c,
                title: "Utilization",
                desc: "Our customers come first before anything else. Regarding employment, our team/employees are regarded as part of our family and we do what we can to look after them."
            },
            {
                image: b,
                title: "Results",
                desc: "Our customers come first before anything else. Regarding employment, our team/employees are regarded as part of our family and we do what we can to look after them."
            },
        ])
    }, [])






    return (
        <section className="value bgMain">
            <div className="val-wrap">
                <div className="valueInside">
                    <h2>Fall in Love with Our Core Values</h2>
                    <div className="value-wrap">

                        {
                            book.map((val, ind) => {
                                return (
                                    <div className="single-value" key={ind}>
                                        <img src={val.image} alt="" />
                                        <div className="value-text">
                                            <h3>{val.title}</h3>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Value