import React from "react";
import './App.css';

function App() {
  const priceTicket = 700;
  const priceCombinedTicket = 1200;
  let x = new Date();
  let timeTickets = x.getHours() + 4

  function sub(evt) {
    evt.preventDefault();
    const formElement = document.getElementById('form');
    const formData = new FormData(formElement);
    const route = formData.get('route');
    const time = formData.get('time').split("(")[0];
    const count = formData.get('count');
    const hours = 
    Math.trunc((formData.get('time').split("(")[0].split(":")[0]*60
    +
    formData.get('time').split("(")[0].split(":")[1]*1
    + 50)/60);
    
    const minutes = 
    Math.round(((formData.get('time').split("(")[0].split(":")[0]*60
    +
    formData.get('time').split("(")[0].split(":")[1]*1
    + 50)/60
    -
    hours) * 60)
    const reverseHours = 
    Math.trunc((formData.get('reverseTime').split("(")[0].split(":")[0]*60
    +
    formData.get('reverseTime').split("(")[0].split(":")[1]*1
    + 50)/60);
    
    const reverseMinutes = 
    Math.round(((formData.get('reverseTime').split("(")[0].split(":")[0]*60
    +
    formData.get('reverseTime').split("(")[0].split(":")[1]*1
    + 50)/60
    -
    reverseHours) * 60)
    
    alert(`
    Вы выбрали ${count} билет${count == 1 ?
    ''
    :
    count > 1 && count < 5 ?
    'а'
    :
    'ов'
    } по маршруту ${route} стоимостью ${route === 'из A в B и обратно в А' ?
    count*priceCombinedTicket
    :
    count*priceTicket}р.
    Это путешествие займет у вас ${route === 'из A в B и обратно в А' ? 
    (reverseHours*60 + reverseMinutes) - (hours*60+minutes) + 50 :
    (hours*60+minutes) - (time.split(":")[0]*60 + time.split(":")[1]*1)
    } минут. 
    Теплоход отправляется в ${time}, а прибудет в 
    ${route === 'из A в B и обратно в А' ? `${reverseHours >= 24 ? reverseHours - 24 : reverseHours}:${reverseMinutes}` : `${hours >= 24 ? hours - 24 : hours}:${minutes < 10 ? `0${minutes}` : minutes}`}.
    `)
  }

    
  function click(e) {
    const reverseSelect = document.getElementById('reverseTime').querySelectorAll('.reverseAB');
    const ba = document.getElementById('time').querySelectorAll('.BA');
    const reverseBA = document.querySelectorAll('.reverseBA');
    const ab = document.querySelectorAll('.AB');
    const timeSelect = document.querySelector('.reverseTime');
    const revNone =document.querySelector('.reverseTimeSel');
  if (e.target.value === 'из A в B и обратно в А') {
    timeSelect.classList.add('reverseTimeVisible')
    revNone.classList.add('reverseTimeVisible')
    reverseSelect.forEach(e => {
      e.classList.add('reverseABNone')
    })
    ba.forEach(e => {
      e.classList.add('BANone')
    })
    reverseBA.forEach(e => {
      e.classList.remove('reverseBANone')
    })
    ab.forEach(e => {
      e.classList.remove('ABNone')
    })
  } else if (e.target.value === 'из A в B') {
    timeSelect.classList.remove('reverseTimeVisible')
    revNone.classList.remove('reverseTimeVisible')
    ba.forEach(e => {
      e.classList.add('BANone')
    })
    ab.forEach(e => {
      e.classList.remove('ABNone')
    })
  } else if (e.target.value === 'из B в A') {
    timeSelect.classList.remove('reverseTimeVisible')
    revNone.classList.remove('reverseTimeVisible')
    ba.forEach(e => {
      e.classList.remove('BANone')
    })
    ab.forEach(e => {
      e.classList.add('ABNone')
    })
  }
  
  }
  function sortTime(e) {
    const spl1 = e.target.value.split("(")
    const spl2 = spl1[0].split(":")
    const timeMinutes = spl2[0]*60+spl2[1]*1
    const revba = Array.from(document.querySelectorAll('.reverseBA'))
    revba.forEach((n) => {
      const timerev = n.value.split("(")[0].split(":")[0]*60+n.value.split("(")[0].split(":")[1]*1
      console.log(timeMinutes,timerev)
      if ((timeMinutes + 50 > timerev)) {
        n.classList.add('reverseBANone')
      } 
      else {
        n.classList.remove('reverseBANone')
      }
    })
  }
  return (
    <div className="App">
      <form onSubmit={sub} id="form" className="form">
        <label htmlFor="route">Выберите направление</label>
        <select onClick={click} name="route" id="route">
          <option></option>
          <option value="из A в B">из A в B</option>
          <option value="из B в A">из B в A</option>
          <option value="из A в B и обратно в А">из A в B и обратно в А</option>
        </select>
        <label htmlFor="time">Выберите время</label>
        <select onClick={sortTime} name="time" id="time">
          <option></option>
          <option
          className="AB" 
            value={
            `${timeTickets >= 24 
            ? timeTickets-24 
            : timeTickets}:00(из A в B)`}
          >
            {timeTickets >= 24 
            ? timeTickets-24 
            : timeTickets}: 00(из A в B)
          </option>
          <option
          className="AB" 
            value={
              `${timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets}:30(из A в B)`}
          >
              {timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets}: 30(из A в B)
          </option>
          <option
          className="AB" 
            value={
              `${timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets}:45(из A в B)`}
          >
              {timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets}: 45(из A в B)
          </option>
          <option
          className="AB" 
            value={
              `${timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}:00(из A в B)`}
          >
              {timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}: 00(из A в B)
          </option>
          <option
          className="AB" 
          value={
              `${timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}:15(из A в B)`}
          >
              {timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}: 15(из A в B)
          </option>
          <option
          className="AB" 
          value={
              `${timeTickets + 3 >= 24 
              ? timeTickets-24 + 3 
              : timeTickets + 3}:00(из A в B)`}
          >
              {timeTickets + 3 >= 24 
              ? timeTickets-24 + 3 
              : timeTickets + 3}: 00(из A в B)
          </option>
          <option
          className="BA" 
          value={
              `${timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets}:30(из B в A)`}
          >
              {timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets}: 30(из B в A)
          </option>
          <option
          className="BA" 
          value={
              `${timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets}:45(из B в A)`}
          >
              {timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets}: 45(из B в A)
          </option>
          <option
          className="BA" 
          value={
              `${timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}:00(из B в A)`}
          >
              {timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}: 00(из B в A)
          </option>
          <option
          className="BA" 
          value={
              `${timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}:15(из B в A)`}
          >
              {timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}: 15(из B в A)
          </option>
          <option
          className="BA" 
          value={
              `${timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}:35(из B в A)`}
          >
              {timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}: 35(из B в A)
          </option>
          <option
          className="BA" 
          value={
              `${timeTickets + 3 >= 24 
              ? timeTickets-24 + 3 
              : timeTickets + 3}:50(из B в A)`}
          >
              {timeTickets + 3 >= 24 
              ? timeTickets-24 + 3 
              : timeTickets + 3}: 50(из B в A)
          </option>
          <option
          className="BA" 
          value={
              `${timeTickets + 3 >= 24 
              ? timeTickets-24 + 3 
              : timeTickets + 3}:55(из B в A)`}
          >
              {timeTickets + 3 >= 24 
              ? timeTickets-24 + 3 
              : timeTickets + 3}: 55(из B в A)
          </option>
        </select>
        <label htmlFor="reverseTime" className="reverseTime">Выберите обратное время</label>
        <select className="reverseTimeSel" name="reverseTime" id="reverseTime">
          <option></option>
          <option
          
          className="reverseAB" 
            value={
            `${timeTickets >= 24 
            ? timeTickets-24 
            : timeTickets}:00(из A в B)`}
          >
            {timeTickets >= 24 
            ? timeTickets-24 
            : timeTickets}: 00(из A в B)
          </option>
          <option
          className="reverseAB" 
            value={
              `${timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets}:30(из A в B)`}
          >
              {timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets}: 30(из A в B)
          </option>
          <option
          className="reverseAB" 
            value={
              `${timeTickets >= 24 
              ? timeTickets-24+1 
              : timeTickets+1}:45(из A в B)`}
          >
              {timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets}: 45(из A в B)
          </option>
          <option
          className="reverseAB" 
            value={
              `${timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}:00(из A в B)`}
          >
              {timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}: 00(из A в B)
          </option>
          <option
          className="reverseAB" 
          value={
              `${timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}:15(из A в B)`}
          >
              {timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}: 15(из A в B)
          </option>
          <option
          className="reverseAB" 
          value={
              `${timeTickets + 3 >= 24 
              ? timeTickets-24 + 3 
              : timeTickets + 3}:00(из A в B)`}
          >
              {timeTickets + 3 >= 24 
              ? timeTickets-24 + 3 
              : timeTickets + 3}: 00(из A в B)
          </option>
          <option
          className="reverseBA" 
          value={
              `${timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets}:30(из B в A)`}
          >
              {timeTickets >= 24 
              ? timeTickets-24  
              : timeTickets}: 30(из B в A)
          </option>
          <option
          className="reverseBA" 
          value={
              `${timeTickets >= 24 
              ? timeTickets-24
              : timeTickets }:45(из B в A)`}
          >
              {timeTickets >= 24 
              ? timeTickets-24 
              : timeTickets }: 45(из B в A)
          </option>
          <option
          className="reverseBA" 
          value={
              `${timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}:00(из B в A)`}
          >
              {timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}: 00(из B в A)
          </option>
          <option
          className="reverseBA" 
          value={
              `${timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}:15(из B в A)`}
          >
              {timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}: 15(из B в A)
          </option>
          <option
          className="reverseBA" 
          value={
              `${timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}:35(из B в A)`}
          >
              {timeTickets + 1 >= 24 
              ? timeTickets-24 + 1 
              : timeTickets + 1}: 35(из B в A)
          </option>
          <option
          className="reverseBA" 
          value={
              `${timeTickets + 3 >= 24 
              ? timeTickets-24 + 3 
              : timeTickets + 3}:50(из B в A)`}
          >
              {timeTickets + 3 >= 24 
              ? timeTickets-24 + 3 
              : timeTickets + 3}: 50(из B в A)
          </option>
          <option
          className="reverseBA" 
          value={
              `${timeTickets + 3 >= 24 
              ? timeTickets-24 + 3 
              : timeTickets + 3}:55(из B в A)`}
          >
              {timeTickets + 3 >= 24 
              ? timeTickets-24 + 3 
              : timeTickets + 3}: 55(из B в A)
          </option>
        </select>
        <label htmlFor="num">Количество билетов</label>
        <input id="num" name="count"/>
        <button type="submit">Посчитать</button>
      </form>
    </div>
  );
}

export default App;
