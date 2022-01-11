
import React, { useEffect, useState } from "react";
import '../cPanel/styles/cluster.scss'
import AddServer from "./components/AddServer";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

const Cluster = () => {

  const [show, setShow] = useState(false);

 

  const showModal = () => {
    setShow(true)
  };

  const hideModal = () => {
    setShow(false)
  };


 

  return (
    <div>
      <div className="container">
        <AddServer show={show} handleClose={() => hideModal()} />

        <button className="server-button" onClick={() => showModal()}> +&nbsp; Add Server&nbsp;</button>
      </div>

      {/* <div className="table">


        <Tabs defaultTab="vertical-tab-one" vertical>
          <TabList>
           
            <Tab tabFor="vertical-tab-one" vertical>Tab 1
              <TabPanel tabId="vertical-tab-one">
                <p>Tab 1 content</p>
              </TabPanel>
            </Tab>


            <Tab tabFor="vertical-tab-two" vertical>Tab 2
              <TabPanel tabId="vertical-tab-two">
                <p>Tab content</p>
              </TabPanel>
            </Tab>


            <Tab tabFor="vertical-tab-three">Tab 3
              <TabPanel tabId="vertical-tab-three">
                <p>Tab 3 content</p>
              </TabPanel>
            </Tab>

          </TabList>
        </Tabs>
      </div> */}


{/* <div >
  <button className="buttons" id="1" onClick={()=>handleClick(1)}>
    <span>Indexer</span>
  </button>
</div> */}
{/* <img src={trial} alt='loading...'/> */}

    </div>
  )

}


export default Cluster