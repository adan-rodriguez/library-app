import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Unlocking Android",
    isbn: 1933988673,
    pageCount: 416,
    year: 2009,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    description:
      "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
    authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    categories: ["Open Source", "Mobile"],
  },
  {
    id: 2,
    title: "Android in Action, Second Edition",
    isbn: 1935182722,
    pageCount: 592,
    year: 2011,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
    description:
      "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
    authors: ["W. Frank Ableson", "Robi Sen"],
    categories: ["Java"],
  },
  {
    id: 3,
    title: "Specification by Example",
    isbn: 1617290084,
    pageCount: 0,
    year: 2011,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
    description:
      "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
    authors: ["Gojko Adzic"],
    categories: ["Software Engineering"],
  },
  {
    id: 4,
    title: "Flex 3 in Action",
    isbn: 1933988746,
    pageCount: 576,
    year: 2009,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
    description:
      "New web applications require engaging user-friendly interfaces   and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it.",
    authors: ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
    categories: ["Internet"],
  },
  {
    id: 5,
    title: "Flex 4 in Action",
    isbn: 1935182420,
    pageCount: 600,
    year: 2010,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
    description:
      "Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it.",
    authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
    categories: ["Internet"],
  },
  {
    id: 6,
    title: "Collective Intelligence in Action",
    isbn: 1933988312,
    pageCount: 425,
    year: 2008,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
    description:
      "There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at once Identifying the wants, needs, and knowledge of internet users can be like listening to a mob. In the Web 2.0 era, leveraging the collective power of user contributions, interactions, and feedback is the key to market dominance.",
    authors: ["Satnam Alag"],
    categories: ["Internet"],
  },
  {
    id: 7,
    title: "Zend Framework in Action",
    isbn: 1933988320,
    pageCount: 432,
    year: 2008,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
    description:
      "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.",
    authors: ["Rob Allen", "Nick Lo", "Steven Brown"],
    categories: ["Web Development"],
  },
  {
    id: 8,
    title: "Flex on Java",
    isbn: 1933988797,
    pageCount: 265,
    year: 2010,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
    description:
      " A beautifully written book that is a must have for every Java Developer. Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
    authors: ["Bernerd Allmon", "Jeremy Anderson"],
    categories: ["Internet"],
  },
  {
    id: 9,
    title: "Griffon in Action",
    isbn: 1935182234,
    pageCount: 375,
    year: 2012,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
    description:
      "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
    authors: ["Andres Almiray", "Danno Ferrin", "James Shingler"],
    categories: ["Java"],
  },
  {
    id: 10,
    title: "OSGi in Depth",
    isbn: 193518217,
    pageCount: 325,
    year: 2011,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
    description:
      "Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification, an emerging Java-based technology for developing modular enterprise applications. Enterprise OSGi addresses several shortcomings of existing enterprise platforms, such as allowing the creation of better maintainable and extensible applications, and provide a simpler, easier-to-use, light-weight solution to enterprise software development.",
    authors: ["Alexandre de Castro Alves"],
    categories: ["Java"],
  },
  {
    id: 11,
    title: "Flexible Rails",
    isbn: 1933988509,
    pageCount: 592,
    year: 2008,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
    description:
      '"Flexible Rails created a standard to which I hold other technical books. You definitely get your money\'s worth."',
    authors: ["Peter Armstrong"],
    categories: ["Web Development"],
  },
  {
    id: 12,
    title: "Hello! Flex 4",
    isbn: 1933988762,
    pageCount: 258,
    year: 2009,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg",
    description:
      "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
    authors: ["Peter Armstrong"],
    categories: ["Internet"],
  },
  {
    id: 13,
    title: "Coffeehouse",
    isbn: 1884777384,
    pageCount: 316,
    year: 1997,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg",
    description:
      "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web.",
    authors: ["Levi Asher", "Christian Crumlish"],
    categories: ["Miscellaneous"],
  },
  {
    id: 14,
    title: "Team Foundation Server 2008 in Action",
    isbn: 1933988592,
    pageCount: 344,
    year: 2008,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/azher.jpg",
    description:
      "In complex software projects, managing the development process can be as critical to success as writing the code itself. A project may involve dozens of developers, managers, architects, testers, and customers, hundreds of builds, and thousands of opportunities to get off-track. To keep tabs on the people, tasks, and components of a medium- to large-scale project, most teams use a development system that allows for easy monitoring, follow-up, and accountability.",
    authors: ["Jamil Azher"],
    categories: ["Microsoft .NET"],
  },
  {
    id: 15,
    title: "Brownfield Application Development in .NET",
    isbn: 1933988711,
    pageCount: 550,
    year: 2010,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
    description:
      "Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.",
    authors: ["Kyle Baley", "Donald Belcham"],
    categories: ["Microsoft"],
  },
  {
    id: 16,
    title: "MongoDB in Action",
    isbn: 1935182870,
    pageCount: 0,
    year: 2011,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg",
    description:
      "MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.",
    authors: ["Kyle Banker"],
    categories: ["Next Generation Databases"],
  },
  {
    id: 17,
    title: "Distributed Application Development with PowerBuilder 6.0",
    isbn: 1884777686,
    pageCount: 504,
    year: 1998,
    thumbnailUrl:
      "https://images.manning.com/360/480/resize/book/7/76b1acd-1e94-4d72-985a-55edd9a759c9/barlotta.jpg",
    description:
      "Distributed Application Development with PowerBuilder 6.0 is a vital source for the PowerBuilder programmer; it provides the sort of detailed coverage of Distributed PowerBuilder that you can find nowwhere else. The book opens with a discussion of distributed computing in general, as well as its design principles and technologies.",
    authors: ["Michael J. Barlotta"],
    categories: ["PowerBuilder"],
  },
  {
    id: 18,
    title: "Jaguar Development with PowerBuilder 7",
    isbn: 1884777864,
    pageCount: 550,
    year: 1999,
    thumbnailUrl:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51JD1A263SL._SX394_BO1,204,203,200_.jpg",
    description:
      "Jaguar Development with PowerBuilder 7 is the definitive guide to distributed application development with PowerBuilder. It is the only book dedicated to preparing PowerBuilder developers for Jaguar applications and has been approved by Sybase engineers and product specialists who build the tools described in the book.",
    authors: ["Michael Barlotta"],
    categories: ["PowerBuilder", "Client-Server"],
  },
  {
    id: 19,
    title: "Taming Jaguar",
    isbn: 1884777686,
    pageCount: 362,
    year: 2000,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg",
    description:
      "Taming Jaguar is part of the PowerBuilder Developer's series, which includes Distributed Application Development with PowerBuilder 6 and Jaguar Development with PowerBuilder 7. An application server is the heart of your enterprise computing architecture, centralizing your web content, business logic, and access to your data and legacy applications.",
    authors: ["Michael J. Barlotta", "Jason R. Weiss"],
    categories: ["PowerBuilder"],
  },
];

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload);
    },
    editBook: (state, action) => {
      const {
        id,
        title,
        isbn,
        pageCount,
        year,
        thumbnailUrl,
        description,
        authors,
        categories,
      } = action.payload;
      const bookFound = state.find((book) => book.id === id);
      if (bookFound) {
        bookFound.title = title;
        bookFound.isbn = isbn;
        bookFound.pageCount = pageCount;
        bookFound.year = year;
        bookFound.thumbnailUrl = thumbnailUrl;
        bookFound.description = description;
        bookFound.authors = authors;
        bookFound.categories = categories;
      }
    },
    deleteBook: (state, action) => {
      const bookFound = state.find((book) => book.id === action.payload);
      bookFound && state.splice(state.indexOf(bookFound), 1);
    },
  },
});
console.log(booksSlice.getInitialState());
export const { addBook, editBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
