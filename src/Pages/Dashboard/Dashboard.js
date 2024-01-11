import React from 'react';
import './dashboard.scss';
import img from '../../Utils/image/Chart.png';
import image from '../../Utils/image/Chart (1).png';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <div className='dashboard__box'>
                <div className='dashboard__top'>
                    <div className='dashboard__left'>
                        <div className='dashboard__but'>
                            <h4>Revenue</h4>
                            <button>View Report</button>
                        </div>
                        <h3>IDR 7.852.000</h3>
                        <p>2.1% vs last week</p>
                        <p>Sales from 1-12 Dec, 2020</p>
                        <img src={img} alt=""/>
                        <div className='dashboard__tub'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.5" r="4.5" fill="#5A6ACF"/>
                            </svg>
                            <p>Last 6 days</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.5" cy="4.5" r="4.5" fill="#D8D9DB"/>
                            </svg>
                            <p>Last Week</p>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='dashboard__right'>
                        <div className='dashboard__but'>
                            <h4>Order Time</h4>
                            <button>View Report</button>
                        </div>
                        <p>From 1-6 Dec, 2020</p>
                        <img src={image} alt=""/>
                        <div className='dashboard__ll'>
                            <div className='dashboard__svg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                    <circle cx="4.5" cy="4.5" r="4.5" fill="#5A6ACF"/>
                                </svg>
                                <div className='dashboard__text'>
                                    <p>Afternoon</p>
                                    <p>40%</p>
                                </div>
                            </div>
                            <div className='dashboard__svg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                    <circle cx="4.5" cy="4.5" r="4.5" fill="#5A6ACF"/>
                                </svg>
                                <div className='dashboard__text'>
                                    <p>Afternoon</p>
                                    <p>40%</p>
                                </div>
                            </div>
                            <div className='dashboard__svg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                    <circle cx="4.5" cy="4.5" r="4.5" fill="#5A6ACF"/>
                                </svg>
                                <div className='dashboard__text'>
                                    <p>Afternoon</p>
                                    <p>40%</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='Line'></div>
                <div className='dashboard__bottom'>
                    <div className='dashboard__left2'>
                    </div>
                    <div className='dashboard__center'>
                    </div>
                    <div className='dashboard__right2'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;