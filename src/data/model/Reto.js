class Reto {
  constructor(
    userId,
    title,
    description,
    categoria,
    fechaInic,
    fechFin,
    isConAmigos,
    isDefault,
    dailyTimestamp
  ) {
    this.userId=userId;
    this.title = title;
    this.description = description;
    this.categoria = categoria;
    this.fechaInic = fechaInic;
    this.fechFin = fechFin;
    this.isConAmigos = isConAmigos;
    this.isDefault = isDefault;
    this.dailyTimestamp = dailyTimestamp;
  }
  toString() {
    return this.title + ", " + this.description;
  }
}

// Firestore data converter
const retoConverter = {
  toFirestore: (reto) => {
    return {
      userId: reto.userId,
      title: reto.title,
      description: reto.description,
      categoria: reto.categoria,
      fechaInic: reto.fechaInic,
      fechFin: reto.fechFin,
      isConAmigos: reto.isConAmigos,
      isDefault: reto.isDefault,
      dailyTimestamp: reto.dailyTimestamp,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Reto(
      data.userId,
      data.title,
      data.description,
      data.categoria,
      data.fechaInic,
      data.fechFin,
      data.isConAmigos,
      data.isDefault,
      data.dailyTimestamp
    );
  },
};

module.exports = {
  retoConverter,
  Reto,
};
