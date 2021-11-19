import React, { useState, useEffect } from 'react';
import { Calendar, Badge } from 'antd';
import moment from "moment";
import { getRetos } from '../../data/repository/RetoRepository';

import "./StyledCalendar.css";

function StyledCalendar() {
  const [retos, setRetos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRetos().then(data => setRetos(data));
    setLoading(false);
  }, [])

  function getListData(value) {
    let retosFiltrados = retos.filter((reto) =>
    (reto.fechaInic <= value.format("DD/MM/YYYY") &&
      reto.fechFin >= value.format("DD/MM/YYYY"))
    )
    
    let listData = retosFiltrados.map((reto) => ({
      type: 'success',
      content: capitalize(reto.title.toLowerCase())
    }))

    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
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