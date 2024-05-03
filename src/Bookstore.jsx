import Book from "./Book";

const BookStore = () => {
  const books = [
    {
      title: "Icebreaker",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/5/q/m/icebreaker-paperback-english-2023-by-hannah-grace-original-imagpcc7j8fafagf.jpeg?q=70",
      author: "Hannah Grace",
    },
    {
      title: "Lets Us Meet",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/5/q/m/icebreaker-paperback-english-2023-by-hannah-grace-original-imagpcc7j8fafagf.jpeg?q=70",
      author: "Koi V",
    },
    {
      title: "Icebreaker",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/5/q/m/icebreaker-paperback-english-2023-by-hannah-grace-original-imagpcc7j8fafagf.jpeg?q=70",
      author: "Hannah Grace",
    },
    {
      title: "Lets Us Meet",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/5/q/m/icebreaker-paperback-english-2023-by-hannah-grace-original-imagpcc7j8fafagf.jpeg?q=70",
      author: "Koi V",
    },
    {
      title: "Icebreaker",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/5/q/m/icebreaker-paperback-english-2023-by-hannah-grace-original-imagpcc7j8fafagf.jpeg?q=70",
      author: "Hannah Grace",
    },
    {
      title: "Lets Us Meet",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/5/q/m/icebreaker-paperback-english-2023-by-hannah-grace-original-imagpcc7j8fafagf.jpeg?q=70",
      author: "Koi V",
    },
  ];

  return (
    <div className="booklist">
      {books.map((b) => (
        <Book {...b} />
      ))}

      {books.map((b) => {
        return <Book {...b} />;
      })}
    </div>
  );
};
export default BookStore;
