import { useEffect, useState } from 'react';

import 'react-tabs/style/react-tabs.css';
import LambCard from './LambCard';
import { Tab, TabList, Tabs } from 'react-tabs';


const ToyTabs = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("lamb");

    useEffect(() => {
        fetch(`http://localhost:5000/tabToys/${activeTab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab])

    // const result = toys?.filter((toy) => toy.sub_category == activeTab)
    // console.log(result)

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className='text-center mt-36'>
            <h3 className='text-green-700 text-4xl mb-3'>Shop by Category</h3>
            <p className='text-slate-500 mb-3'>Here are some sub category toys. You can explore the sub categories and buy the one you like ...</p>

            <Tabs>
                <div className="tabs justify-center text-3xl text-green-700">
                    <TabList>
                        <Tab onClick={() => handleTabClick("lamb")} >Lamb</Tab>
                    
                        <Tab onClick={() => handleTabClick("cow")} >Cow</Tab>
                    
                        <Tab onClick={() => handleTabClick("teddy")} >Teddy</Tab>
                    </TabList>
                </div>
            </Tabs>

            <div className='flex justify-center items-center flex-wrap gap-10 mt-10'>

                {
                    toys.map(toy => <LambCard key={toy._id}
                        toy={toy}></LambCard>)
                }


            </div>

            {/* <Tabs>
                <TabList className='text-green-600 text-2xl'>
                    <Tab onClick={() => handleTabClick("lamb")}>Lamb</Tab>
                    <Tab onClick={() => handleTabClick("cow")}>Cow</Tab>
                    <Tab onClick={() => handleTabClick("teddy")}>Teddy Bear</Tab>
                </TabList>

                
                <TabPanel  >
                    {
                        toys.map(toy => <LambCard key={toy._id}
                            toy={toy}></LambCard>)
                    }
                </TabPanel>
                <TabPanel >
                    {
                        toys.map(toy => <LambCard key={toy._id}
                            toy={toy}></LambCard>)
                    }
                </TabPanel>
                <TabPanel >
                    {
                        toys.map(toy => <LambCard key={toy._id}
                            toy={toy}></LambCard>)
                    }
                </TabPanel>
                
                
            </Tabs> */}
        </div>
    );
};

export default ToyTabs;