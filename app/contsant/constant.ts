export const Navlinks = [
{
    id:1,
    url: '#',
    lable:'Home',
},
{
    id:2,
    url: '#',
    lable:'Company',
},
{
    id:3,
    url: '#',
    lable:'Contact',
},
{
    id:4,
    url: '#',
    lable:'About',
},
{
    id:5,
    url: '#',
    lable:'Services',
},
]

interface LeverageLink{
  text: string;
subtext?: string;
  image: string; 
};

export const LeverageLinks: LeverageLink[] = [
  {
    text: "850+ University Partners",
    image: "🤝",
  },
  {
    text: "45,000+ Success Stories",
    image: "🏆",
  },
  {
    text: "Scholarship up to 50%*",
    image: "🪙",
  },
  {
    text: "Courses starting at ₹8 Lakhs*",
    image: "🎓",
  }
  
];

export const LevAdv: LeverageLink[] = [
    {
        text: "Find the Right Program",
        subtext: "Get personalized recommendations for courses and countries that best fit your academic background, career goals, and interests. Our experts analyze your profile to ensure you make the most informed decision for your future.",
        image: "💻",
    },
    {
        text: "Expert Application Guidance",
        subtext: "Receive step-by-step support from industry mentors throughout your application journey. From document preparation to submission, we ensure your application stands out to top universities worldwide.",
        image: "👩‍🏫",
    },
    {
        text: "English Test Prep Support",
        subtext: "Access comprehensive resources and expert coaching for IELTS, TOEFL, and PTE. Practice anytime, anywhere, and boost your confidence to achieve the scores you need for your dream university.",
        image: "📝",
    },
    {
        text: "Interview & VISA Preparation",
        subtext: "Master university interviews and visa documentation with our tailored guidance. We help you prepare for every question and requirement, increasing your chances of success.",
        image: "✈️",
    },
    {
        text: "Complete Financial Planning",
        subtext: "Explore scholarships, education loans, and budgeting strategies designed for international students. We help you secure funding and manage expenses for a stress-free study abroad experience.",
        image: "💰",
    },
    {
        text: "Pre-departure & Wellness Support",
        subtext: "Benefit from our pre-departure sessions and ongoing wellness support to help you adapt smoothly to life abroad. We’re with you every step, from packing tips to settling in confidently.",
        image: "🏠",
    }
];

interface University  {
  name: string
  location: string
  courses?: string
};

interface UniversityGroup {
  country: string;
  universities: University[];
};


export const UniversityData: UniversityGroup[] = [
  {
    country: "United Kingdom",
    universities: [
      { name: "University of Birmingham", location: "Birmingham, United Kingdom", courses: "497+ Courses" },
      { name: "Queen Mary University of London", location: "London, United Kingdom", courses: "519+ Courses" },
      { name: "University of Essex", location: "Colchester, United Kingdom", courses: "450+ Courses" },
      { name: "Coventry University", location: "Coventry, United Kingdom", courses: "503+ Courses" },
      { name: "Nottingham Trent University", location: "Nottingham, United Kingdom", courses: "335+ Courses" },
      { name: "University of East London", location: "London, United Kingdom", courses: "373+ Courses" },
    ],
  },
  {
    country: "United States",
    universities: [
      { name: "Adelphi University", location: "Garden City, United States", courses: "214+ Courses" },
      { name: "Western New England University", location: "Springfield, United States", courses: "64+ Courses" },
      { name: "University of the Pacific", location: "Stockton, United States", courses: "194+ Courses" },
      { name: "Cleveland State University", location: "Cleveland, United States", courses: "230+ Courses" },
      { name: "University of Dayton", location: "Dayton, United States", courses: "339+ Courses" },
      { name: "Johns Hopkins University", location: "Baltimore, United States", courses: "43+ Courses" },
    ],
  },
  {
    country: "Germany",
    universities: [
      { name: "International University of Applied Sciences", location: "Bad Honnef, Germany", courses: "25+ Courses" },
      { name: "SRH - Hochschulen Heidelberg", location: "Heidelberg, Germany", courses: "9+ Courses" },
      { name: "SRH - Berlin University of Applied Science", location: "Berlin, Germany", courses: "55+ Courses" },
      { name: "Technical University of Munich", location: "Munich, Germany", courses: "14+ Courses" },
      { name: "Berlin School of Business and Innovation (BSBI)", location: "Berlin, Germany", courses: "36+ Courses" },
      { name: "University of Europe For Applied Sciences", location: "Berlin, Germany" },
    ],
  },
  {
    country: "Canada",
    universities: [
      { name: "University Canada West", location: "Vancouver, Canada", courses: "5+ Courses" },
      { name: "Conestoga College", location: "Kitchener, Canada", courses: "242+ Courses" },
      { name: "Seneca College", location: "Toronto, Canada", courses: "155+ Courses" },
      { name: "George Brown College", location: "Toronto, Canada", courses: "140+ Courses" },
      { name: "Humber College", location: "Lakeshore, Canada", courses: "167+ Courses" },
      { name: "University of Niagara Falls Canada", location: "Niagara Falls, Canada" ,courses:"21+ Courses"},
    ],
  },
  {
    country: "UAE",
    universities: [
      { name: "University of Birmingham", location: "Dubai", courses: "93+ Courses" },
      { name: "Middlesex University", location: "Dubai", courses: "64+ Courses" },
      { name: "Heriot-Watt University", location: "Dubai", courses: "56+ Courses" },
      { name: "Manipal University", location: "Dubai", courses: "42+ Courses" },
      { name: "De Montfort University", location: "Dubai", courses: "22+ Courses" },
      { name: "Amity University", location: "Dubai",courses:"10+ Courses" },
    ],
  },
];

export const countries = [
  {
    name: 'United Kingdom',
    flag: 'https://publicassets.leverageedu.com/study-abroad/ukFlag.png',
  },
  {
    name: 'United States',
    flag: 'https://publicassets.leverageedu.com/study-abroad/usaFlag.png',
  },
  {
    name: 'Germany',
    flag: 'https://publicassets.leverageedu.com/study-abroad/germanyFlag.png',
  },
  {
    name: 'Canada',
    flag: 'https://publicassets.leverageedu.com/study-abroad/canadaFlag.png',
  },
  {
    name: 'UAE',
    flag: 'https://publicassets.leverageedu.com/study-abroad/dubaiFlag.png',
  },
];

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  program: string;
  university: string;
}


export const testimonials: Testimonial[] = [
  {
    name: "Kshitij",
    location: "Delhi ⟶ United Kingdom",
    quote:
      "My Leverage Edu coach made studying abroad a breeze. From university shortlisting to visa application, they guided me every step of the way.",
    program: "Data Science",
    university: "University of Edinburgh",
  },
  {
    name: "Aarushi",
    location: "Mumbai ⟶ Canada",
    quote:
      "I got into my dream university thanks to the expert advice I received. Leverage Edu made the process smooth and worry-free.",
    program: "Computer Science",
    university: "University of Toronto",
  },
  {
    name: "Rohan",
    location: "Bangalore ⟶ Germany",
    quote:
      "With Leverage Edu’s help, I secured admission in one of the top universities in Europe. Their mentorship is unmatched.",
    program: "Mechanical Engineering",
    university: "Technical University of Munich",
  },
  {
    name: "Sneha",
    location: "Pune ⟶ United States",
    quote:
      "Visa applications used to be scary. With their step-by-step help, I got mine approved on the first attempt.",
    program: "Business Analytics",
    university: "New York University",
  },
  {
    name: "Tanmay",
    location: "Chandigarh ⟶ Dubai",
    quote:
      "Their support system is so strong that I never felt alone throughout my application journey.",
    program: "Finance",
    university: "University of Dubai",
  },
  {
    name: "Ishita",
    location: "Kolkata ⟶ United Kingdom",
    quote:
      "The university shortlisting was done after deeply understanding my goals. That made all the difference!",
    program: "Artificial Intelligence",
    university: "University of Oxford",
  },
];





