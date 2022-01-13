import { Image } from "@chakra-ui/react";

const WidgetOptions = () => {
  const Widget = [
    {
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Communication Skills",
      descrption: "Share your experience, tips & tricks to deal with people.",
    },
    {
      image: "https://wallpapercave.com/wp/wp8583820.jpg",
      title: "Python Coding",
      descrption:
        "Learn PYTHON Tips and Tricks I Share your knowledge with us to help the society",
    },
    {
      image:
        "https://qphs.fs.quoracdn.net/main-thumb-ti-1576018-50-wuzursxebjkwhokdqnryfnnirooqqebo.jpeg",
      title: "Stock Market in India",
      descrption: "Everything about Indian stock market 🇮🇳🇮🇳🇮🇳.",
    },
    {
      image:
        "https://qphs.fs.quoracdn.net/main-thumb-ti-1576526-50-ovjjjbeeofhapgpiytuhstadmviwpxcf.jpeg",
      title: "English words",
      descrption: "A platform where  get a new english word to learn daily",
    },
    {
      image:
        "https://qphs.fs.quoracdn.net/main-thumb-ti-1195-50-zrqxlfjkitfzfyhiqeefkalbxlaojdgs.jpeg",
      title: "How to use your brain?",
      descrption:
        "Psychology, Motivation, Self-help, Thinking, & Learning (Science & Experiences)",
    },
    {
      image:
        "https://qsfs.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_purple.png-26-6ea9822273dc841e.png",
      title: "INTERVIEW PREPRATION",
      descrption:
        "This space is created for interview related guidance,queries and prepration",
    },
  ];
  return (
    <div>
      {Widget.map((item) => (
        <div>
          <div className="flex space-x-1 hover:bg-gray-100 p-2 rounded-md">
            <img src={item.image} className="widget" />
            <div className="space-y-1">
              <h1 className="text-sm">{item.title}</h1>
              <h3 className="text-xs text-gray-500">{item.descrption}</h3>
            </div>
          </div>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default WidgetOptions;
