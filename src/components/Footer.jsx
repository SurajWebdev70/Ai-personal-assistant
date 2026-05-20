function Controls() {
  return (
    <div className="controls-footer bg-slate-800 p-4 rounded-xl"> 
      <button type="button">Mark Important</button>
      <button type="button">|| Pause</button>
      <button type="button" className="stop">Stop Recording</button>
      <button type="button">Download Notes</button>
      <button type="button">Share Notes</button>
    </div>
  );
}

export default Controls;
