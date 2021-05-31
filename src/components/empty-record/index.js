import React from 'react';
import Icon from '../icon';
import EmptyIcon from '@/static/image/icon/broke.svg';
const EmptyRecord = ({
  icon = EmptyIcon,
  title = 'Empty record',
  description = '',
}) => {
  return (
    <div className="empty-record">
      <div className="empty-record__icon">
        <Icon style={{ width: 80, height: 80 }} src={icon} />
      </div>
      <div className="empty-record__title">{title}</div>
      {description && <div className="empty-record__desc">{description}</div>}
    </div>
  );
};

export default EmptyRecord;
