import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyTabs = () => {
    return (
        <div className='text-center mt-36'>
            <h3 className='text-green-700 text-4xl mb-3'>Shop by Category</h3>
            <p className='text-slate-500 mb-3'>Here are some sub category toys. You can explore the sub categories and buy the one you like ...</p>
            <Tabs>
                <TabList className='text-green-600 text-2xl'>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ToyTabs;