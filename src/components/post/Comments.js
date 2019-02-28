import React from 'react'

const Comments = () =>{
  return (
    <div className="card card-body mb-3">
        <div className="row">
        <div className="col-md-2">
            <a href="profile.html">
            <img className="rounded-circle d-none d-md-block" src=""
                alt="" />
            </a>
            <br />
            <p className="text-center">User</p>
        </div>
        <div className="col-md-10">
            <p className="lead">Comments</p>
            <button type="button" className="btn btn-light mr-1">
            <i className="text-info fas fa-thumbs-up"></i>
            <span className="badge badge-light">4</span>
            </button>
            <button type="button" className="btn btn-light mr-1">
            <i className="text-secondary fas fa-thumbs-down"></i>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Comments
