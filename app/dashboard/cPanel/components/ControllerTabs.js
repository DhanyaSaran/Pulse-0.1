import React,{useState} from "react";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import '../styles/Tab.scss'


const ControllableTabs = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const tabCount = 3;
  
    return (
      <>
        <Tabs  defaultTab={selectedTab.toString()}>

          <TabList className='Heading'>
            <Tab tabFor="0" className='tabsSelected'>
              
              <span>Server Type</span>
              
              </Tab>

            <Tab  tabFor="1" className={selectedTab>=1?'tabsSelected':'tabs'} disabled>Server Specs</Tab>
            <Tab  tabFor="2" className={selectedTab>=2?'tabsSelected':'tabs'} disabled>Confirmation</Tab>
          </TabList>


         <div>
         <TabPanel focusable tabId="0">
            <p>Tab 1 content</p>
          </TabPanel>
          <TabPanel tabId="1">
            <p>Tab 2 content</p>
          </TabPanel>
          <TabPanel tabId="2" >
            <p>Tab 3 content</p>
          </TabPanel>
        </div> 
        </Tabs>



        <button onClick={() => selectedTab>0?setSelectedTab((selectedTab  - 1)):''}>Back</button>
        <button onClick={() => selectedTab<tabCount-1?setSelectedTab((selectedTab + 1)  ):''}>Next</button>
      </>
    );
}

export default ControllableTabs;