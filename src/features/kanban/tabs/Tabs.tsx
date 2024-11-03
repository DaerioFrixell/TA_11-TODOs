import { useTabs } from "./hooks";
import { tabList } from "./tabList";

import './tabs.scss';

/** 
 * Отсутствует мемоизация мапинга, т.к. мапятся 4 строки. Мемоизация увеличит нагрузку на процессор.
 */
export const Tabs = () => {
  const { currentTab, toSetTab, todosCount } = useTabs();
  console.log('todos: ', todosCount)

  return (
    <div className="tabs">
      {tabList.map(tab => (
        < div key={tab.key} >
          <span
            className={currentTab === tab.value ? 'active-tab' : 'tab'}
            onClick={() => toSetTab(tab)}>
            {tab.value.toUpperCase()}
          </span>
          <span>
            ({todosCount[tab.key]})
          </span>
        </div>
      ))
      }
    </div >
  )
}