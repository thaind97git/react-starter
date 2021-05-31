import React, { Fragment } from 'react';
import { ensureArray } from '@/utils';

import { generatePath, goURL } from '@/helpers/router';
import Icon from '@/components/icon';

import ViewDetailsICon from '@/static/image/icon/view-details.svg';
import EditIcon from '@/static/image/icon/edit.svg';

const TodoList = ({ todos = [] }) => {
  return (
    <ul className="todo-list">
      {ensureArray(todos).map(todo => {
        const { id, title } = todo || {};
        return (
          <Fragment key={id}>
            <li className="todo-list__item">
              <Icon
                className="todo-list__item__icon"
                src={ViewDetailsICon}
                onClick={() => goURL(generatePath(['todos', 'details', id]))}
              />
              <Icon
                onClick={() => goURL(generatePath(['todos', 'edit'], { id }))}
                className="todo-list__item__icon"
                src={EditIcon}
              />
              {title}
            </li>
            <hr />
          </Fragment>
        );
      })}
    </ul>
  );
};

export default TodoList;
