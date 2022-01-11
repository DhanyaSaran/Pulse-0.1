import React from 'react'
import '../styles/AddServer.scss';
import ControllableTabs from './ControllerTabs';


const AddServer = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
          <div className='title-bar'>
          <text className='title'>Start Server</text>
        <button type="button" onClick={handleClose} className='close-button'>
          Close
        </button>
          </div>


<ControllableTabs/>

          
      </section>
    </div>
  );
};

export default AddServer;