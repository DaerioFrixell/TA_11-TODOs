import { fakeTodos } from "../../fakeTodos"
import { tabList } from "../tabs/tabList";
import { useTabs } from "../tabs/hooks";

export const TodoList = () => {
  const { currentTab } = useTabs();

  if (currentTab === tabList[0]) {
    // переписать через Reduce
    return fakeTodos
      .filter(todo => todo.checked === false)
      .map(todo => {
        return (
          <div>
            {/* TODO сделать компонент чекбокс */}
            <input type="checkbox" checked={todo.checked} />
            <span>{todo.text}</span>
          </div>
        )
      })
  }

  if (currentTab === tabList[1]) {
    return fakeTodos
      .map(todo => {
        return (
          <div>
            {/* TODO сделать компонент чекбокс */}
            <input type="checkbox" checked={todo.checked} />
            <span>{todo.text}</span>
          </div>
        )
      })
  }

  if (currentTab === tabList[2]) {
    return fakeTodos
      .filter(todo => todo.checked === true)
      .map(todo => {
        return (
          <div>
            {/* TODO сделать компонент чекбокс */}
            <input type="checkbox" checked={todo.checked} />
            <span>{todo.text}</span>
          </div>
        )
      })
  }

  if (currentTab === tabList[3]) {
    // use Reduce
    return fakeTodos
      .filter(todo => todo.deleted === true)
      .map(todo => {
        return (
          <div>
            {/* TODO сделать компонент чекбокс */}
            <input type="checkbox" checked={todo.checked} />
            <span>{todo.text}</span>
          </div>
        )
      })
  }
}