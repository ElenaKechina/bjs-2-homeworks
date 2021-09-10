class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }

  set state(wear) {
    if (wear > 100) {
      wear = 100;
    }
    if (wear < 0) {
      wear = 0;
    }
    this._state = wear;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state <= 30) {
      return;
    }

    this.books.push(book);
  }

  findBookBy(type, value) {
    for (const book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      }
    }
    return null;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.subject = {};
  }

  addMark(mark, subject) {
    if (mark < 1 || mark > 5) {
      return 'Ошибка, оценка должна быть числом от 1 до 5';
    }
    if (!this.subject[subject]) {
      this.subject[subject] = [];
    }
    this.subject[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.subject[subject]) {
      return 'Несуществующий предмет';
    }
    const avg =
      this.subject[subject].reduce((sum, value) => sum + value, 0) /
      this.subject[subject].length;
    return +avg.toFixed(1);
  }

  getAverage() {
    let sum = 0;
    for (const subject in this.subject) {
      sum += this.getAverageBySubject(subject);
    }
    const avg = sum / Object.keys(this.subject).length;
    return +avg.toFixed(2);
  }

  exclude(reason) {
    delete this.subject;
    this.excluded = reason;
  }
}
