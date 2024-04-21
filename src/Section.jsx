import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function Section() {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 mx-5">
            <div className="col-lg-4">
                <div className="card bg-light border-0 text-center p-4">
                    <div className='icon text-center text-white'>
                    <i className='bi bi-collection bg-primary p-3 rounded fs-5'></i>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Fresh new layout</h5>
                        <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card bg-light border-0 text-center p-4">
                    <div className='icon text-center text-white'>
                    <i className='bi bi-cloud-download bg-primary p-3 rounded fs-5'></i>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Free to download</h5>
                        <p className="card-text">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card bg-light border-0 text-center p-4">
                    <div className='icon text-center text-white'>
                    <i className='bi bi-card-heading bg-primary p-3 rounded fs-5'></i>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Jumbotron hero header</h5>
                        <p className="card-text">The heroic part of this template is the jumbotron hero header!</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card bg-light border-0 text-center p-4">
                    <div className='icon text-center text-white'>
                    <i className='bi bi-bootstrap bg-primary p-3 rounded fs-5'></i>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Feature boxes</h5>
                        <p className="card-text">We've created some custom feature boxes using Bootstrap icons!</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card bg-light border-0 text-center p-4">
                    <div className='icon text-center text-white'>
                    <i className='bi bi-code bg-primary p-3 rounded fs-5'></i>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Simple clean code</h5>
                        <p className="card-text">We keep our dependencies up to date and squash bugs as they come!</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card bg-light border-0 text-center p-4">
                    <div className='icon text-center text-white'>
                    <i className='bi bi-patch-check bg-primary p-3 rounded fs-5'></i>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">A name you trust</h5>
                        <p className="card-text">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Section;