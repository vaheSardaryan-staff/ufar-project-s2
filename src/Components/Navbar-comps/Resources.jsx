import React from "react";

const Resources = () => {
  const books = [
    {
      id: 1,
      name: "Angleren - shtemaran 1",
      pdf: "http://www.atc.am/files/shtemaranner/2017-2018/ENGLISH%20SHTEM_1%202017-18.pdf", // Replace with actual PDF URL
      image: "book1.png",
    },
    {
      id: 2,
      name: "Angleren - shtemaran 2",
      pdf: "http://www.atc.am/files/shtemaranner/2017-2018/ENGLISH%20SHTEM_2%202017-18.pdf", // Replace with actual PDF URL
      image: "book2.png", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Angleren - shtemaran 3",
      pdf: "http://www.atc.am/files/shtemaranner/2017-2018/ENGLISH%20SHTEM_3%202017-18.pdf", // Replace with actual PDF URL
      image: "book3.png", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Ruseren - shtemaran 1",
      pdf: "http://www.atc.am/files/shtemaranner/2015-2016/Russian_1.pdf",
      image: "book4.jpg",
    },
    {
      id: 5,
      name: "Ruseren - shtemaran 2",
      pdf: "http://www.atc.am/files/shtemaranner/2015-2016/Russian_2.pdf",
      image: "book5.jpg",
    },
    {
      id: 6,
      name: "Ruseren - shtemaran 1",
      pdf: "http://www.atc.am/files/shtemaranner/2015-2016/Russian_3.pdf", // Replace with actual PDF URL
      image: "book6.jpg",
    },
    {
      id: 7,
      name: "Qimia - shtemaran 1",
      pdf: "http://www.atc.am/files/shtemaranner/2015-2016/Chemistry_1.pdf",
      image: "book7.jpg",
    },
    {
      id: 8,
      name: "Qimia - shtemaran 2",
      pdf: "http://www.atc.am/files/shtemaranner/2015-2016/Chemistry_2.pdf",
      image: "book8.jpg",
    },
    {
      id: 9,
      name: "Qimia - shtemaran 3",
      pdf: "http://www.atc.am/files/shtemaranner/2015-2016/Chemistry_3.pdf",
      image: "book9.jpg",
    },
  ];

  return (
    <div className="unique-resources-page">
      <div className="unique-resources-container">
        <h1 className="text-center unique-resources-title">Resources</h1>
        <p className="text-center unique-resources-description">
          Access helpful resources and guides for university applications.
        </p>

        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="unique-resources-card">
                <img
                  src={book.image}
                  alt={book.name}
                  className="unique-resources-card-image"
                />
                <div className="unique-resources-card-body">
                  <h5 className="unique-resources-card-title">{book.name}</h5>
                  <a
                    href={book.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="unique-resources-btn"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;