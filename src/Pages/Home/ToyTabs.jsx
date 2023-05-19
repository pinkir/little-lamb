import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LambCard from './LambCard';

const ToyTabs = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tabToys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className='text-center mt-36'>
            <h3 className='text-green-700 text-4xl mb-3'>Shop by Category</h3>
            <p className='text-slate-500 mb-3'>Here are some sub category toys. You can explore the sub categories and buy the one you like ...</p>
            <Tabs>
                <TabList className='text-green-600 text-2xl'>
                    <Tab>Lamb</Tab>
                    <Tab>Cow</Tab>
                    <Tab>Teddy Bear</Tab>
                </TabList>

                <TabPanel>
                    {
                        toys.map(toy => <LambCard key={toy._id}
                        toy={toy}></LambCard>)
                    }
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