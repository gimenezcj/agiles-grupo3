class User {
    constructor(
      name,
      mail,
      retoList,
    ) {
      this.name = name;
      this.mail = mail;
      this.retoList = retoList;
    }
    toString() {
      return this.name + ", " + this.mail;
    }
  }
  
  // Firestore data converter
  const userConverter = {
    toFirestore: (user) => {
      return {
        name: user.name,
        mail: user.mail,
        retoList: user.retoList,
      };
    },
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new User(
        data.name,
        data.mail,
        data.retoList,
      );
    },
  };
  
  module.exports = {
    userConverter,
    User,
  };
  