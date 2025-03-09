  //project1 - bc
  import project1 from "./Project1.jpg";
  import bcard1 from "./b card2.jpg";
  import bcard2 from "./b card3.jpg";
  import bcard3 from "./b card4.jpg";
  //project2 - climate chnage
  import climate from "./Climate_change.png"
  import cc1 from "./cc1.png"
  import cc2 from "./cc2.png"
  import cc3 from "./cc3.png"
  //project3 - auction system
  import auction from "./auction.png"
  import auc1 from "./auc1.png"
  import auc2 from "./auc2.png"
  //project4 - spotify
  import spotify from "./spotify.png"
  import sp1 from "./sp1.png"
  import sp2 from "./sp2.png"
  //project2 - mayara
  import mayara1 from "./mayara1.png";
  import mayara2 from "./mayara2.png";
  import mayara3 from "./mayara3.png";
  import mayara4 from "./mayara4.png";
  //project3 - UIUX
  import project2 from "./ui-planning.jpg";
  import ui1 from "./p2.png";
  import ui2 from "./p6.png";
 // project4 - fifa
 import fifa from "./fifa.jpg";
 import project6 from "./p7.png";
 import fifa2 from "./web-project.jpg";
 //project5 - user-rating
 import project4 from "./p4.png";
 import user1 from "./active-states.jpg";
 import user2 from "./desktop-thank-you-state.jpg";
 //project6 - age calc
  import project3 from "./p1.jpg";
  import age2 from "./mobile-design.jpg";
  import age3 from "./active-states1.jpg";
//project7 - illustrations
import illu from "./Illustration.png";
import illu1 from "./serenity.jpg";
import illu2 from "./chinese_culture.png";
import illu3 from "./fashion2.jpg";
//project8 - Research
import ai from "./researrch.jpg";
import ai1 from "./GA.jpg";
import ai2 from "./GBM.png";
import ai3 from "./LR.png";
//file
import research from "../../assets/Research Project.pdf";
import spotify_research from "../../assets/Spotify music analysis.pdf";
  export const projects = [
    {
      id: 1,
      image: mayara3,
      date: "2024-04-01",
      images: [mayara1, mayara2, mayara4],
      name: "Mayara HRIS",
      category: "Development",
      services: "Web Development",
      link: "http://admin.mayratechnology.com",
      description: "A complete human resource information system including accounting involves the integration of various aspects of human resource management with accounting principles to track, measure, and report on the financial and non-financial aspects of an organization's employees. This system aims to provide a comprehensive understanding of the costs and values associated with human resources, enabling informed decision-making and strategic planning.",
      tools: "HTML, Tailwind CSS, Shadcn, ReactJs, Redux"

    },
    {
      id: 2,
      image: climate,
      date: "2025-02-01",
      images: [cc1, cc2, cc3],
      name: "Climate Change Tracker Dashbaord",
      category: "Data Science",
      services: "Dashboard",
      link: "https://climate-change-tracker-dashboard.streamlit.app/",
      description: "Climate Change Tracker Dashboard is an interactive tool designed to visualize and analyze the key contributors to global warming. It brings together data on CO₂ emissions, global temperature rise, energy consumption patterns, and deforestation trends, allowing users to explore how these factors have evolved over time. The dashboard enables comparisons between countries, helping to identify major contributors and trends in sustainability efforts. By making climate data accessible and engaging, my goal is to raise awareness and encourage informed discussions on the urgent need for climate action.",
      tools: "Python (Numpy, Pandas, Plotly), Streamlit, NASA data, Our world in data"

    },
    {
      id: 3,
      image: auction,
      date: "2025-01-12",
      images: [auc1, auction, auc2],
      name: "Secure Auction System",
      category: "Data Science",
      services: "Security",
      link: "https://oblivioustransfer.streamlit.app/",
      description: "This system ensures private, tamper-proof bidding using Diffie-Hellman encryption and AES-256 to protect bids. Inspired by Oblivious Transfer (OT) principles, only the winner’s bid is revealed, keeping others secret. Built with Streamlit for simplicity, it combines cryptographic security with an intuitive interface for fair, transparent auctions. Bid confidently—your privacy is encrypted. ",
      tools: "Python, Streamlit"

    },
    {
      id: 4,
      image: spotify,
      date: "2025-03-01",
      images: [sp1, spotify, sp2],
      name: "Spotify Music Analysis",
      category: "Data Science",
      services: "Research and Analysis",
      file: spotify_research,
      description: "This project decodes how audio features and genres drive track popularity on Spotify. Using statistical analysis (regression, ANOVA, t-tests) on 28,000+ tracks, I identified trends: modern music (2000s) is louder, faster, and more energetic, while Pop and Rap dominate in popularity. Features like danceability boost engagement, while instrumental tracks lag. Combining data science rigor with cultural insights, the work offers actionable takeaways for creators and platforms, bridging art and analytics in the streaming era.",
      tools: "Python/R, Statistical Modeling, Spotify Datasets"

    },
    {
      id: 5,
      image: project1,
      date: "2021-07-29",
      images: [bcard1, bcard2, bcard3],
      name: "Business Cards",
      category: "Design",
      services: "Graphics Designing",
      link: "https://shorturl.at/wMQVz",
      description: "This project shows my graphic design skills through creating stylish and simple business cards. I started it as practice, but it turned into a real project, showing how useful the designs are. My main goal was to design business cards from scratch, including making the logos and arranging everything on the card. I focused on a clean and elegant look, using straight lines, lots of empty space, and carefully chosen fonts.\n\nI made each logo specifically for the business it represents. I used Adobe Illustrator for the design work to ensure high quality, and Adobe Photoshop to make realistic previews of the cards. I created two different card samples to show how the designs can fit various business needs. The simple and stylish design makes the cards look professional and appealing without being too flashy.\n\nWhat started as practice became useful for real businesses, proving the designs work well in the real world. In the future, I HTML, Tailwind CSS, Shadcn, ReactJs, Reduxplan to create more card designs for different industries and add features like QR codes or augmented reality to make the cards more interactive. This project not only shows my graphic design skills but also my ability to turn ideas into real, usable products.",
      tools: "Adobe Photoshop, Adobe Illustrator"
    },
    
    {
      id: 6,
      image: ai,
      date: "2023-4-26",
      images: [ai, ai1, ai2],
      name: "Research in AI",
      category: "Data Science",
      services: "Machine learning and research",
      file: research,
      description: `This project is a research study focusing on the comparative analysis of different machine learning algorithms applied to credit card fraud detection. Using datasets from Kaggle, which were divided into three separate subsets, we compared the performance of various machine learning algorithms. Specifically, we evaluated logistic regression and gradient boosting algorithms. \n\n
      To enhance the effectiveness of the gradient boosting algorithm, we employed hyperparameter tuning using a genetic algorithm. This process allowed us to optimize the model's parameters for better performance. Additionally, we used bar graphs to visualize and compare the results of our analyses.\n\n
      This project was conducted as part of a college research initiative, driven by a desire to explore the practical applications of machine learning in fraud detection. The findings and methodologies were compiled into a comprehensive report, highlighting the strengths and weaknesses of each algorithm. The research not only provided valuable insights into fraud detection but also honed our skills in machine learning and data analysis.`,
      tools: "Python, Pandas, Numpy, Scikit Learn"
    },
    {
      id: 7,
      image: illu,
      date: "2023-01-23",
      images: [illu1, illu2, illu3],
      name: "Illustrations",
      category: "Design",
      services: "Graphic Design",
      link: "https://www.behance.net/musibirali/projects",
      description: "I created this series of illustrations mostly as a hobby. I like to treat it as a project that represents different topics in unique ways. For example, I made one about Nepal, showcasing its culture, religion, traditions, and monuments. In another project, I depicted serenity by illustrating the things that bring me peace. I also created one focused on fashion.",
      tools: "Adobe Illustrator"
    },
    {
      id: 8,
      image: project3,
      date: "2023-05-10",
      images: [project3, age2, age3],
      name: "Age Calculator",
      category: "Development",
      services: "UI/UX desigin, Frontend design",
      link: "https://github.com/Arpana-Sitoula/age-calculator",
      description: "It is a simple age calculator application where you can calculate your age in years, months, and days. It includes error handling through form validation.",
      tools: "React, SCSS"
    },
    {
      id: 9,
      image: project4,
      date: "2023-05-06",
      images: [project4, user1, user2],
      name: "User Rating Application",
      category: "Development",
      services: "UI/UX desigin, Frontend design",
      link: "https://github.com/Arpana-Sitoula/user-rating",
      description: "The user rating feature is not new but also not uncommon. It is found everywhere, from e-commerce to live streaming platforms. User ratings are important for both companies and users, as they help organizations improve and inform other users about the quality of products or services. However, the design of these features often receives little attention. I have encountered poor user interfaces and experiences many times, which is why many users are reluctant to leave ratings. To address this, I designed and developed an interactive user rating application that includes feedback for the user. It is simple, uses attractive colors, and can be implemented as a reusable pop-in component.",
      tools: "React, SCSS"
    },
    {
      id: 10,
      image: project2,
      date: "2022-11-28",
      images: [project2, ui1, ui2],
      name: "UI/UX Ecommerce",
      category: "Design",
      services: "Prototype design, Frontend design",
      link: "http://admin.mayratechnology.com",
      description: "It is UI/UX prototype design as my model for the agro based company named- Matodotcom. The company promote to sell the tools and items require for agiculture. As agriculture being the integral part of our daily life, promoting ecommerce for these company will be very beneficial for farmers. In this , we have categorized products on the basis of chemical fertilizers, tools, pestisides and seeds. In the market, farmers has to buy on the bulk but here they can get in the amoun they are looking for. In near future, we are also thinking to add the section where farmers can purchase tools in a loan for certain amount of time. As the tool they need will only be used for few days and doing so will help minimize their cost.",
      tools: "Adobe XD, HTML, CSS"
    },
    {
      id: 11,
      image: project6,
      date: "2023-01-01",
      images: [fifa2,project6, fifa],
      name: "FIFA News App",
      category: "Development",
      services: "Web development",
      link: "https://github.com/Arpana-Sitoula/FIFA-Updates",
      description: "This is a news web application designed exclusively for sports lovers who wish to stay updated with the latest news. I created this project during the FIFA World Cup, a time when the whole world was going crazy about it. The initial plan was to include not only news but also live scores, upcoming fixtures, and live comments from users. However, not all functionalities have been added in this version. The project is still a work in progress and will be completed in the near future.",
      tools: "React, CSS"
    }
  ];
