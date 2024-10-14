const DaySwitcher = ({ onSwitchDay, selectedDay }) => {
    return (
      <div>
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
  };

export default DaySwitcher;