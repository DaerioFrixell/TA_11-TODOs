import { useDispatch } from "react-redux";
import { ChangeEvent, useState } from "react";

import { Button } from "../../../shared/ui/components/button";
import { Input } from "../../../shared/ui/components/input";
import { Modal } from "../../../shared/ui/components/modal";
import { useModal } from "../../../shared/hooks/useModal";
import { addTodo, removeAll } from '../todo-list/todoSlice';

import './navigation.scss';

export const Navigation = () => {
  const dispatch = useDispatch()
  const { hideModal, isVisible, showModal } = useModal();
  const [inputText, setInputText] = useState('');

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text)
  }

  const toCreateTodo = (text: string) => {
    const id = new Date().getTime();

    dispatch(addTodo({
      id,
      text,
      checked: false,
      deleted: false,
    }));

    setInputText('');
    hideModal();
  };

  const toDeleteAllTodos = () => {
    dispatch(removeAll())
  }

  return (
    <div className="navigation">
      <Button
        className="button-standard"
        text="добавить"
        iconPossition="left"
        onClick={showModal}
      />

      <div className="navigation__useless-element">пополните список...</div>

      <Button
        className="button-danger"
        text="удалить"
        iconPossition="right"
        onClick={toDeleteAllTodos}
      />

      <Modal isVisible={isVisible} >
        <h2 className="modal-title">Добавление нового дела</h2>

        <Input
          placeholder="введите текст"
          value={inputText}
          onChange={inputOnChange} />

        <div className='modal-navigation'>
          <Button
            className="button-danger"
            onClick={() => toCreateTodo(inputText)}
            text="добавить" />

          <Button
            className='button-standard'
            text='закрыть'
            onClick={hideModal} />
        </div>
      </Modal>
    </div >
  )
}