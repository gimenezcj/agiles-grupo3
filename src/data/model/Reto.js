class Reto {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
  toString() {
    return this.id + ", " + this.title + ", " + this.description;
  }
}

// Firestore data converter
const retoConverter = {
  toFirestore: (reto) => {
      return {
          id: reto.id,
          title: reto.title,
          description: reto.description
          };
  },
  fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new Reto(data.id, data.title, data.description);
  }
};

module.exports = {
  retoConverter,
  Reto
}
