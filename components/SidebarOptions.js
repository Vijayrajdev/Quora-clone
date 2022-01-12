const SidebarOptions = () => {
  const Sidebar = [
    {
      image:
        "https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg",
      title: "History",
    },
    {
      image:
        "https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg",
      title: "Psychology",
    },
    {
      image:
        "https://qphs.fs.quoracdn.net/main-thumb-t-828-100-tDJdGH6ngba9XOtHP0p3blrN9fsNtsFG.jpeg",
      title: "Visiting and Travels",
    },
    {
      image:
        "https://qphs.fs.quoracdn.net/main-thumb-t-199422-100-olktuwkvitkewquucdblhqextxicliqh.jpeg",
      title: "Downloading",
    },
    {
      image:
        "https://qphs.fs.quoracdn.net/main-thumb-t-66120-100-kmdeydc8LKHuAONJsFLS41pcjdJxPtqE.jpeg",
      title: "Harry Potter (book series)",
    },
    {
      image:
        "https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg",
      title: "Music",
    },
    {
      image:
        "https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg",
      title: "Movies",
    },
    {
      image:
        "https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg",
      title: "Technology",
    },
  ];
  return (
    <div className="flex flex-col  space-y-4 ">
      {Sidebar.map((options) => (
        <div
          className="flex items-center hover:bg-slate-200 p-2 space-x-3 rounded-lg"
          key={options.title}
        >
          <img className="image" src={options.image} alt="" />
          <p className="text-gray-600 text-xs ">{options.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SidebarOptions;
