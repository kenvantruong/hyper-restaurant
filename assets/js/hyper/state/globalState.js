

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


// ---------REVIEWS------------

var reviews = [
  {
    company: "MasterChef Of Vietnam",
    author: "Dom Ramsey",
    authorInfo: "- Winner of Iron Chef 2017",
    hightlight: '"Best Pho Restaurant in San Francisco area!"',
    review: "Vaporware sustainable mlkshk af hammock distillery selfies marfa narwhal. Cliche semiotics health goth, blog cred lumbersexual mumblecore celiac kitsch lo-fi sriracha."
  },
  {
    company: "China Food Network",
    author: "Chef Lee",
    authorInfo: "- Grand Master Chef of Shanghai",
    hightlight: '"Hands down, most delicious flavored Pho ever!"',
    review: "Vaporware sustainable mlkshk af hammock distillery selfies marfa narwhal. Cliche semiotics health goth, blog cred lumbersexual mumblecore celiac kitsch lo-fi sriracha."
  },
  {
    company: "America Got Taste",
    author: "Bill James",
    authorInfo: "- Top 4 Best Contestant",
    hightlight: '"OMG Highly reccommended!"',
    review: "Vaporware sustainable mlkshk af hammock distillery selfies marfa narwhal. Cliche semiotics health goth, blog cred lumbersexual mumblecore celiac kitsch lo-fi sriracha."
  },
  {
    company: "New York Best Diner",
    author: "Dr. Chef Jeff Rogan",
    authorInfo: "- World Class Champion of 5 Star Restaurant",
    hightlight: '"It taste like heaven! tropical rain forest in Vietnam. Wow!"',
    review: "Vaporware sustainable mlkshk af hammock distillery selfies marfa narwhal. Cliche semiotics health goth, blog cred lumbersexual mumblecore celiac kitsch lo-fi sriracha."
  },
  {
    company: "HBO Sneak Peek",
    author: "Krissy Nguyen",
    authorInfo: "- Best of the best Judge for American's Best Food",
    hightlight: '"OMG all my girl friends come here for our birthdays! are you serious!?!"',
    review: "Vaporware sustainable mlkshk af hammock distillery selfies marfa narwhal. Cliche semiotics health goth, blog cred lumbersexual mumblecore celiac kitsch lo-fi sriracha."
  },
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviews
}