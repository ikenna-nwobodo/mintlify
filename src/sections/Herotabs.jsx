import React, { useState } from "react";
import Tab from "../components/Tab";
import TabContent from "../components/TabContent";

function Herotabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="z-50 w-11/12 md:w-full gap-8 flex flex-col items-center justify-center">
      <div className="sm:flex bg-black justify-between gap-2 bg-opacity-[16%] rounded-lg hidden w-11/12 lg:w-6/12 p-0.5 border-secondary border">
        <Tab
          title="Guides"
          icon="import_contacts"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          title="API Reference"
          icon="terminal"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          title="SDK Docs"
          icon="cases"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          title="Chat"
          icon="forum"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="p-3 bg-imgbg border border-secondary">
        <TabContent id="tab1" activeTab={activeTab}>
          <img
            src={require("../assets/images/home.png")}
            alt="pic"
            className="rounded-2xl"
          />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <img
            src={require("../assets/images/apiref.png")}
            alt="pic"
            className="rounded-2xl"
          />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <img
            src={require("../assets/images/sdk.png")}
            alt="pic"
            className="rounded-2xl"
          />
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <img
            src={require("../assets/images/chat.png")}
            alt="pic"
            className="rounded-2xl"
          />
        </TabContent>
      </div>
    </div>
  );
}

export default Herotabs;
