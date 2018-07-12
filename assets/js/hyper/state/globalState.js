

var companyInfo = {
  title: 'TASTE OF VIETNAM',
  phone: '(715) 899 - 8674',
  location: 'San Francisco, United States'
}

var specialMenuData = [
  {
    title: "Phở đặc Biệt #1",
    description: "Famous Beef Rice Noodle Soup - Includes Beef or Chicken, Onions, Sugar, Ginger, Salt, Star anise, Fish sauce, and Rice Noodles",
    price: "10",
    img: "box-img-one"
  },
  {
    title: "Bún Bò Huế #37",
    description: "Hue Village Special Rice Noodle Soup - Includes Oxtail, Beef, Pork, Red pepper flakes, Garlic, Annatto seeds, Fish sauce, Shrimp paste",
    price: "12",
    img: "box-img-two"
  },
  {
    title: "Bún Bò Xào #12",
    description: "Vietnamese Lemon Grass Chicken with Rice Noodles - Includes Chicken, Sirloin Steak, Sugar, Sprouts, Fish sauce",
    price: "15",
    img: "box-img-three"
  },
]


// ---------Random Quote------------
var randomQuoteData = [
  {
    author: '- Johnny -',
    quote: '"The Secret Ingredient Is Always Love."'
  },
  {
    author: '- Ashley -',
    quote: '"First we eat, then we do everything else."'
  },
  {
    author: '- Ramya -',
    quote: '"Food is an important part of a balanced diet."'
  },
  {
    author: '- Katie -',
    quote: '"Food is like sex: When you abstain, even the worst stuff begins to look good."'
  }
]


// ---------REVIEWS------------

var reviewsData = [
  {
    company: "MasterChef Of Vietnam",
    author: "Dom Ramsey",
    authorInfo: " - Winner of Iron Chef 2017",
    hightlight: '"Best Pho Restaurant in San Francisco area!"',
    review: "Vaporware sustainable mlkshk af hammock distillery selfies marfa narwhal. Cliche semiotics health goth, blog cred lumbersexual mumblecore celiac kitsch lo-fi sriracha."
  },
  {
    company: "China Food Network",
    author: "Chef Lee",
    authorInfo: " - Grand Master Chef of Shanghai",
    hightlight: '"Hands down, most delicious flavored Pho ever!"',
    review: "Adaptogen tumeric cray fanny pack, photo booth chillwave gastropub subway tile shoreditch butcher poke. Fashion axe venmo tote bag pork belly keffiyeh 3 wolf moon. "
  },
  {
    company: "America Got Taste",
    author: "Bill James",
    authorInfo: " - Top 4 Best Contestant",
    hightlight: '"OMG Highly reccommended!"',
    review: "Cardigan keffiyeh cronut four dollar toast, fanny pack cred hoodie knausgaard forage microdosing schlitz next level iPhone williamsburg. Truffaut kogi tousled gochujang fingerstache banjo."
  },
  {
    company: "New York Best Diner",
    author: "Dr. Chef Jeff Rogan",
    authorInfo: " - World Class Champion of 5 Star Restaurant",
    hightlight: '"It taste like heaven! tropical rain forest in Vietnam. Wow!"',
    review: "Drinking vinegar trust fund you probably haven't heard of them affogato meditation kinfolk. Hexagon vape lyft, kombucha pug tofu chia ennui gochujang."
  },
  {
    company: "HBO Sneak Peek",
    author: "Krissy Nguyen",
    authorInfo: " - Best of the best Judge for American's Best Food",
    hightlight: '"OMG all my girl friends come here for our birthdays! are you serious!?!"',
    review: "Cred meggings vexillologist ethical, schlitz forage woke. +1 mlkshk succulents franzen. Meditation retro williamsburg irony. "
  },
]




export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0,
  }
}