import React, { useState, useEffect } from 'react';
import { Calendar, Badge } from 'antd';
import { getRetoByIds } from '../../data/repository/RetoRepository';

import "./StyledCalendar.css";

function StyledCalendar() {
  const [retos, setRetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const user=JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const types = [
      "pink",
      "red",
      "yellow",
      "orange",
      "cyan",
      "green",
      "blue",
      "purple",
      "geekblue",
      "magenta",
      "volcano",
      "gold",
      "lime"
    ];

    getRetoByIds(user.retoList).then(data => {
      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      let retos=data.map((reto) => ({ ...reto, type: types[getRandomInt(0, types.length)] }));
//      let retos = data.map((reto) => ({ ...reto, type: types[getRandomInt(0, types.length)] }))
      setRetos(retos)
      console.log(retos);
    });
    setLoading(false);
  }, [])

  function getListData(value) {
    let retosFiltrados = retos.filter((reto) =>
    (reto.fechaInic <= value.format("YYYY-MM-DD") &&
      reto.fechFin >= value.format("YYYY-MM-DD"))
    )

    let listData = retosFiltrados.map((reto) => ({
      type: reto.type,
      content: capitalize(reto.title.toLowerCase())
    }))

    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item, i) => (
          <li key={`key-${item.content}-${i}`}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  const capitalize = (str) =>
    str.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());


  return !loading ? (
    <div style={{ margin: "auto", width: "100%" }}>
      <Calendar dateCellRender={dateCellRender} />
    </div>
  ) : <p>Cargando calendario...</p>;
}

export default StyledCalendar;
