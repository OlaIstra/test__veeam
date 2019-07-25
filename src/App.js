import React, {Component} from "react";

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import CustomForm from "./components/CustomForm/CustomForm";
import Config from "./components/Config/Config";

import "./App.css"

class App extends Component {
    state = {
        current: ""
    };

    updateData = (value) => {
        this.setState({current: value})
    }

    render() {
        return (
            <div className="App">
                <Tabs>
                    <TabList>
                        <Tab>Config</Tab>
                        <Tab>Result</Tab>
                    </TabList>

                    <TabPanel>
                        <Config updateData={this.updateData}/>
                    </TabPanel>
                    <TabPanel>
                        <CustomForm
                            key={this.state.current.key}
                            value={this.state.current}
                        />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default App;
