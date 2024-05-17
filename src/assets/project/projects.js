  //project1 - bc
  import project1 from "./Project1.jpg";
  import bcard1 from "./b card2.jpg";
  import bcard2 from "./b card3.jpg";
  import bcard3 from "./b card4.jpg";
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
  export const projects = [
    {
      id: 1,
      image: mayara3,
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
      image: project1,
      images: [bcard1, bcard2, bcard3],
      name: "Business Cards",
      category: "Design",
      services: "Graphics Designing",
      link: "link",
      description: "This project shows my graphic design skills through creating stylish and simple business cards. I started it as practice, but it turned into a real project, showing how useful the designs are. My main goal was to design business cards from scratch, including making the logos and arranging everything on the card. I focused on a clean and elegant look, using straight lines, lots of empty space, and carefully chosen fonts.\n\nI made each logo specifically for the business it represents. I used Adobe Illustrator for the design work to ensure high quality, and Adobe Photoshop to make realistic previews of the cards. I created two different card samples to show how the designs can fit various business needs. The simple and stylish design makes the cards look professional and appealing without being too flashy.\n\nWhat started as practice became useful for real businesses, proving the designs work well in the real world. In the future, I plan to create more card designs for different industries and add features like QR codes or augmented reality to make the cards more interactive. This project not only shows my graphic design skills but also my ability to turn ideas into real, usable products.",
      tools: "Adobe Photoshop, Adobe Illustrator"
    },
    
    {
      id: 3,
      image: ai,
      images: [ai, ai1, ai2],
      name: "Research in AI",
      category: "Artificial Intelligence",
      services: "Machine learning and research",
      link: "http://admin.mayratechnology.com",
      description: `This project is a research study focusing on the comparative analysis of different machine learning algorithms applied to credit card fraud detection. Using datasets from Kaggle, which were divided into three separate subsets, we compared the performance of various machine learning algorithms. Specifically, we evaluated logistic regression and gradient boosting algorithms. \n\n
      To enhance the effectiveness of the gradient boosting algorithm, we employed hyperparameter tuning using a genetic algorithm. This process allowed us to optimize the model's parameters for better performance. Additionally, we used bar graphs to visualize and compare the results of our analyses.\n\n
      This project was conducted as part of a college research initiative, driven by a desire to explore the practical applications of machine learning in fraud detection. The findings and methodologies were compiled into a comprehensive report, highlighting the strengths and weaknesses of each algorithm. The research not only provided valuable insights into fraud detection but also honed our skills in machine learning and data analysis.`,
      tools: "Python, Pandas, Numpy, Scikit Learn"
    },
    {
      id: 4,
      image: illu,
      images: [illu1, illu2, illu3],
      name: "Illustrations",
      category: "Design",
      services: "Graphic Design",
      link: "http://admin.mayratechnology.com",
      description: "I made the series of Illustrations mostly as my hobbies. I like to make it as a project where it represent about the topic in a different way. I have made : Nepal where I have showed the culture, religion, tradition, monuments about it. In anothere project I have made the serenity where I designed the things that I do to get from serenity. Another one is about the fashion. ",
      tools: "Adobe Illustrator"
    },
    {
      id: 5,
      image: project3,
      images: [project3, age2, age3],
      name: "Age Calculator",
      category: "Development",
      services: "UI/UX desigin, Frontend design",
      link: "http://admin.mayratechnology.com",
      description: "It is simple age calculator application where we can calculate our age in year, month and days. It has capacity of handling errors using form validation.",
      tools: "React, SCSS"
    },
    {
      id: 6,
      image: project4,
      images: [project4, user1, user2],
      name: "User Rating Application",
      category: "Development",
      services: "UI/UX desigin, Frontend design",
      link: "http://admin.mayratechnology.com",
      description: "User rating feature is not new but also not so uncommon. It is everywhere from ecommerce to live streamings. User rating is important from the perspective of company as well as user as it help organization to improve and other users to know about it. However, the less attention has been paid while designing it. I have encountered bad user interface and expereince many times which is the reason why many user don't want to do rating. Here I designed and develop the interactive user rating application along with the feedback to the user. It is simple with attractive colors. It can be used as a pop in application as a resuable component ",
      tools: "React, SCSS"
    },
    {
      id: 7,
      image: project2,
      images: [project2, ui1, ui2],
      name: "UI/UX Ecommerce",
      category: "Design",
      services: "Prototype design, Frontend design",
      link: "http://admin.mayratechnology.com",
      description: "It is UI/UX prototype design as my model for the agro based company named- Matodotcom. The company promote to sell the tools and items require for agiculture. As agriculture being the integral part of our daily life, promoting ecommerce for these company will be very beneficial for farmers. In this , we have categorized products on the basis of chemical fertilizers, tools, pestisides and seeds. In the market, farmers has to buy on the bulk but here they can get in the amoun they are looking for. In near future, we are also thinking to add the section where farmers can purchase tools in a loan for certain amount of time. As the tool they need will only be used for few days and doing so will help minimize their cost. ",
      tools: "Adobe XD, HTML, CSS"
    },
    {
      id: 8,
      image: project6,
      images: [fifa2,project6, fifa],
      name: "FIFA News App",
      category: "Development",
      services: "Web development",
      link: "lhttp://admin.mayratechnology.comink",
      description: "This is the news web application exclusively for sports lover who wish to remain updated with latest news. I made this project during fifa world cup event when the whole world was going crazy about it. It was initially planned not only for news but also for the live score of match and upcoming fixtures and live comment from the user. However all the fuctionality has not been added in this version. It is yet to complete in near future.",
      tools: "React, CSS"
    }
  ];
