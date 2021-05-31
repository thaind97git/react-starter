import React from 'react';
import { useParams } from 'react-router-dom';

import { getTodoDetails } from '@/apis/todo';

import useGet from '@/hooks/useGet';
import Icon from '@/components/icon';
import RLink from '@/components/r-link';
import Button from '@/components/button';
import EmptyRecord from '@/components/empty-record';

import BackIcon from '@/static/image/icon/back.svg';

const TodoDetails = () => {
  const params = useParams();
  const { id } = params;

  const { data: todoDetails, fetching } = useGet({
    func: () => getTodoDetails(id),
    triggerCondition: id,
  });

  if (id && fetching) {
    return 'Fetching Todo Details...';
  }

  if (!id || !todoDetails) {
    return <EmptyRecord title="Can not find any todo" />;
  }

  return (
    <div className="todo-details">
      <Button>
        <RLink
          className="back"
          to="/todos"
          prefix={<Icon small src={BackIcon} />}
        >
          Back
        </RLink>
      </Button>
      <h3>Todo Details here</h3>
      <b>Id:</b> {todoDetails.id}
      <br />
      <b>Title:</b> {todoDetails.title}
    </div>
  );
};

export default TodoDetails;
