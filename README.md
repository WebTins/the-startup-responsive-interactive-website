# Decathlon

Client: Product page Decathlon

Decathlon is an international sports retailer that has a great focus on online e-commerce. Teams in Amsterdam, Lille, and Paris work on the website and digital experience for the 16 largest countries. Decathlon not only works with sports products but also provides a travel platform called “Decathlon Travel”, where people can explore and book sports activities.

### Client's request

Redesigning/building the media gallery of a product page. The media gallery was experienced as unaccessible and unclear. The images were not fully displayed within the slides, which made it appear broken or not functioning properly.

### Developer

Tin Nguyen - GitHub Username: [WebTins](https://github.com/WebTins)

## Design choices

Before building the website I had a strong focus on designing the photo gallery first and that is why I have compared other websites that do have a more appealing and accesible photo gallery that I took inspiration of.

The website I took inspiration from was Gymshark, a multinational retailer of sportsclothes where they have a photo gallery 

**Mobile**

https://github.com/user-attachments/assets/9cda9773-2e68-4832-950c-82b9192802bb

**Desktop**

https://github.com/user-attachments/assets/dc4c55a3-14b4-4f5b-ad32-4b598bc52b43

Gymshark has a photo gallery that's sticky on both collumns that have a scroll which makes it easy to look at the product and the product info on both sides. This way you won't be dragged down the page while scrolling through the gallery.

In Figma I made a few designs for the photo gallery but also for a few content in the product page that I found more appealing.

**Mobile design**

In this design you will see that the photo gallery is on top with a scrollbar at the bottom which the current website doesn't have. The reason why I think the scrollbar is better to show is so customers know how far they can scroll and where they are at the moment. This makes it accessible for customers that are on mobile.

<img width="282" height="798" alt="image" src="https://github.com/user-attachments/assets/9c092aea-ed4a-4810-bdac-c32892720e58" />

While I was looking at the current productpage I noticed a few things that I wanted to change and make more appealing for the customers. One of them is the brand link that's on top of the title.
When I was exploring the current productpage I didn't know that you could click on the brand because it has the same color as the title. 

So I brought up the idea to change the color of it to make it appealing for the customer to hover their mouse or finger on it to be able to know that you could navigate to the linked products to that brand.
The second thing that I have noticed is that the price tag of the product is not on the first view when you land on the page which I personally wouldn't like to see.

So I also redisigned it and moved it up bellow the title so the customer can see the photo gallery, title and the product at the same time. This way I think it's more appealing to customers so they don't need to scroll down first to see the price. The pricetag also had a yellow background with black text in it which I didn't think it would suit since the website is mostly white and blue (brand color). 

So I decided to also make the background blue and the text white to make it more appealing, even though yellow stands different and could be more appealing but the price is one of the first things a customer would look at when they visit a product page.

**Desktop design**

For desktop I decided to make the photo gallery in 1 collumn that's sticky. This was my preference since the website had large images that took up about 66% of the width. That is unnecessary and that's why I gave them all the same size in 1 collumn

<img width="473" height="704" alt="image" src="https://github.com/user-attachments/assets/30a98ee9-109d-422b-8ae1-140fa0e3df17" />

## Description

For the whole page:

- Uses semantic HTML elements such as `<form>`, `<input>`, and `<section>`.
- Developed mobile-first, with @media queries for wider screens.

### Photo gallery mobile and desktop

https://github.com/user-attachments/assets/f7a6dbec-cc5b-42bc-8d63-10e50a04a0bd

https://github.com/user-attachments/assets/ab15bb96-ed6c-442c-b27d-cbd10c4bd9e6

### Hamburger menu interaction

I decided to use the same hamburger menu but with a smoother and a bit slower animation when opening and closing the menu. The current menu's animation seems a bit too fast and not very smooth which is why I decided to rebuild it. It has the same functionality, just different looks.

https://github.com/user-attachments/assets/bd69ed74-1084-428b-a721-a5e77f5261aa

## Features

In the photo gallery when you scroll or swipe and release. The browser will automatically pick the image that's closest to the middle. 

To do this I used ***scroll-snap-align*** 

https://github.com/WebTins/the-startup-responsive-interactive-website/blob/ddd385c9186e36abeb6d35d74b0545ed0717134a/styles/styles.css#L348-L380

## WCAG Audit

[WCAG Audit](https://github.com/WebTins/the-startup-responsive-interactive-website/wiki/WCAG-Audit-Decathlon)

### Whitespace and indentation
When it comes to code conventions, it is important to take whitespace into account to keep your code readable, and this is done by using indentation.  
Therefore, I chose to always use tabs for indentation and to add one blank line after each selector.

Here is an example of my HTML and CSS code where I applied whitespace:

- [HTML example](https://github.com/WebTins/the-startup-responsive-interactive-website/blob/0b72b67bac8a15b1821cd5f5b0259c83fff15c57/index.html#L114-L129)
- [CSS example](https://github.com/WebTins/the-startup-responsive-interactive-website/blob/0b72b67bac8a15b1821cd5f5b0259c83fff15c57/styles/styles.css#L148-L153)

---

### Order and nesting of CSS selectors
While styling, it is important that all CSS selectors are properly nested and placed in the correct order.  
This improves readability and makes it easier to navigate when searching for selectors to style.

Here is an example of how I organized my code and nested the CSS selectors:

- [CSS order and nesting example](https://github.com/WebTins/the-startup-responsive-interactive-website/blob/0b72b67bac8a15b1821cd5f5b0259c83fff15c57/styles/styles.css#L55-L80)

---

### Nesting of media queries
Nesting media queries is very important for the structure of the code and also helps prevent unnecessary lines of code.

Here is a small example of how I nested my media queries:

- [Media query nesting example](https://github.com/WebTins/the-startup-responsive-interactive-website/blob/0b72b67bac8a15b1821cd5f5b0259c83fff15c57/styles/styles.css#L213-L220)

---

### Naming conventions
When naming classes, it is important to me to use **kebab-case**, and all classes must be written in **lowercase** and in **English**. With JavaScript I use camelCase for the variables I make, this makes a great difference between CSS classes and JS variables when you're coding in Javascript.


## Sources

- [Gymshark](https://nl.gymshark.com/products/gymshark-crest-straight-leg-joggers-black-aw23)
- [Decathlon](https://www.decathlon.nl/p/warm-en-comfortabel-thermoshirt-voor-skien-dames-bl100-zwart/302806/c382m8510031)
- [MDN scroll-snap-align](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-align)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


