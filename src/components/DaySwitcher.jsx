import React from 'react';

const DaySwitcher = ({ onSwitchDay, selectedDay }) => (
  <div className="day-switcher">
    <button
      className={selectedDay === 'today' ? 'active' : ''}
      onClick={() => onSwitchDay('today')}
    >
      Today
    </button>
    <button
      className={selectedDay === 'tomorrow' ? 'active' : ''}
      onClick={() => onSwitchDay('tomorrow')}
    >
      Tomorrow
    </button>
  </div>
);

export default DaySwitcher;