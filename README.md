# Shopping App

This project fetches product data from an API and displays it in categorized tabs for Men, Women, and Kids. Each category displays product cards with details like image, name, vendor, price, and discount.

## Features

- Fetches product data from a given API.
- Displays product cards with details for Men, Women, and Kids categories.
- Shows discounted prices and calculates the discount percentage.
- Responsive design with adaptive styles for different screen sizes.


## Demo

Live link: https://yogesh7858.github.io/Shopping_App/



## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need a modern web browser to view the project.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/product-category-display.git

2. Navigate to the project directory:
    ```bash
    cd product-category-display

3. Open the index.html file in your web browser to view the project.

        ├── index.html
        ├── style.css
        └── script.js

index.html

The main HTML file that structures the webpage and includes links to the CSS and JavaScript files.

style.css

Contains all the styles for the project, including responsive design adjustments.

script.js

Contains the JavaScript code that fetches data from the API, processes it, and dynamically updates the DOM.






## Usage



1. Open the index.html file in your browser.
2. Click on the category tabs (Men, Women, Kids) to view products in each category.
## Functions

`fetch(apiUrl)` : Fetches data from the API and processes it.

`menCategory(data)` : Processes and displays products in the Men category.

`womenCategory(data)` : 
Processes and displays products in the Women category.

`kidsCategory(data)` : 
Processes and displays products in the Kids category.

`createProductCard(product)` : 
Creates HTML structure for a product card.

`calculateDiscount(sellingPrice, originalPrice)` : 
Calculates the discount percentage.

`showList(event, category)` : 
Shows the products of the selected category.

`setActiveStyles(event)` : 
Sets active styles for the selected tab.
## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Acknowledgements

 - Google Fonts for the Roboto font.
 
Make sure to replace `your-username` with your actual GitHub username. Also, ensure that the repository link is correct.

You can save this content into a `README.md` file and place it in the root directory of your project. This will help others understand your project and how to use it.



