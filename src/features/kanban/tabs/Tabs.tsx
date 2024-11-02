import { useTabs } from "./hooks";
import { tabList } from "./tabList";

import './tabs.scss';

export const Tabs = () => {
  const { currentTab, toSetTab } = useTabs()

  return (
    <div className="tabs">
      {tabList.map(tab => <span
        key={tab}
        className={currentTab === tab ? `active-tab` : `tab`}
        onClick={() => toSetTab(tab)}>{tab.toUpperCase()} </span>)}
    </div>
  )
}