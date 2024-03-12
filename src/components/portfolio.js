import React from 'react';
import '../App.css';
import '../portfolio.css';

const Portfolio = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="header">
                                    <h3>Portfolio</h3>
                                </div>
                                <div className="modal-footer" />

                                <div className="grid-container vertical-line">
                                    <div className="grid-item gallery__item--1">
                                        <a href='https://katycaroline.github.io/Horiseon-Webpage/' target="_blank">
                                            <img src="" alt="Horiseon Webpage"
                                                 className="gallery__img"/>
                                            <div className="desc">
                                                <h5>Horiseon Webpage</h5>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="grid-item gallery__item--2">
                                        <a href='https://almondnick.github.io/fbi-criminal-finder/' target="_blank">
                                            <img src="" alt="FBI Criminal Finder"
                                                 className="gallery__img"/>
                                            <div className="desc">
                                                <h5>FBI Criminal Finder</h5>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="grid-item gallery__item--3">
                                        <a href='https://worth-the-watch-4fed4e43ed4e.herokuapp.com/' target="_blank">
                                            <img src="" alt="Worth the Watch?"
                                                 className="gallery__img"/>
                                            <div className="desc">
                                                <h5>Worth the Watch?</h5>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;