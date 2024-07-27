import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppContextProvider from "./context/appContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buzzer",
  description: `Welcome to Buzzer - The Ultimate Web Application for Food & Cafe Enthusiasts

Are you a passionate foodie or a cafe connoisseur always on the lookout for the next great dining experience? Look no further than Buzzer, the premier web application designed to transform the way you discover and enjoy food and beverages.Buzzer is your go- to platform for exploring a vast array of restaurant and cafe products, tailored to meet your every craving and culinary desire.

Why Choose Buzzer ?

  At Buzzer, we believe that finding the perfect meal should be as enjoyable as eating it.Our cutting - edge web application is crafted with the latest technology to provide you with an intuitive and seamless experience.Here’s what sets Buzzer apart:

Extensive Product Range: Dive into a rich selection of food and drink options from a variety of restaurants and cafes.From gourmet dishes to casual bites, our extensive catalog ensures that there’s something for everyone.

  Real - Time Updates: Stay informed with live updates on menus, specials, and availability.Our platform ensures you have access to the most current information, so you never miss out on your favorite dishes or exciting new offerings.

Detailed Reviews and Ratings: Make informed decisions with access to comprehensive reviews and ratings from fellow diners.Our user - generated feedback helps you choose the best spots based on real experiences and recommendations.

Exclusive Offers and Discounts: Enjoy special deals and promotions available only through Buzzer.Save money while indulging in your favorite foods and discovering new culinary gems.

  User - Friendly Interface: Navigate our platform with ease thanks to a user - friendly design that makes finding and ordering food a breeze.Our streamlined interface ensures that your dining experience is smooth and hassle - free.

Personalized Recommendations: Receive tailored suggestions based on your preferences and past interactions.Buzzer’s smart algorithms help you discover new restaurants and cafes that align with your taste.

Community Engagement: Join a vibrant community of food lovers and cafe enthusiasts.Share your experiences, participate in discussions, and connect with others who share your passion for great food and exceptional service.

Elevate Your Dining Experience with Buzzer

Buzzer is more than just a web application; it’s a gateway to a world of culinary delights.Whether you’re looking for a quick bite, a fine dining experience, or the perfect coffee spot, Buzzer connects you with the best restaurants and cafes in town.

Experience the convenience and excitement of discovering new dining options and enjoying your favorites with ease.Join the Buzzer community today and transform the way you explore, enjoy, and savor food and beverages.

Discover the difference with Buzzer—where every meal is an adventure, and every visit is a new experience!
`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
