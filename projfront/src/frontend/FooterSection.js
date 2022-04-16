import React from 'react';

const FooterSection = ()=>{
    return (
<div className="container-fluid bg-black">
    <div className='container'>
    <footer className="row row-cols-5 py-5">
    <div className="col-12 col-lg-3 gx-5 gy-3">
     <div className='box' style={{height:"200px"}}></div>
    </div>

    {/* <div className="col">

    </div> */}

    <div className="col-6 col-lg-3 gx-5 gy-3">
      <h5 className='text-primary'>Links</h5>
      <ul className="nav flex-column">
        <li className="lead" style={{fontSize:16}}><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="lead" style={{fontSize:16}}><a href="#" className="nav-link p-0 text-muted">Marketplace</a></li>
        <li className="lead" style={{fontSize:16}}><a href="#" className="nav-link p-0 text-muted">Login</a></li>
        
      </ul>
    </div>

    <div className="col-6 col-lg-3 gx-5 gy-3">
    <h5 className='text-primary'>Services</h5>
      <ul className="nav flex-column">
        <li className="lead" style={{fontSize:16}}><a href="#" className="nav-link p-0 text-muted">Art</a></li>
        <li className="lead" style={{fontSize:16}}><a href="#" className="nav-link p-0 text-muted">Rare</a></li>
        <li className="lead" style={{fontSize:16}}><a href="#" className="nav-link p-0 text-muted">Genric</a></li>
       </ul>
    </div>

    <div className="col-6 col-lg-3 gx-5 gy-3">
    <h5 className='text-primary'>Others</h5>
      <ul className="nav flex-column">
        <li className="lead" style={{fontSize:16}}><a href="#" className="nav-link p-0 text-muted">Github</a></li>

      </ul>
    </div>
  </footer>
    </div>
</div>
    );
}

export default FooterSection;