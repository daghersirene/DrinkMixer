# DrinkMixer
Simple web app for generating and saving cocktail recipes

### Table of Contents
1. [Overview](https://github.com/daghersirene/DrinkMixer#overview)
2. [Wireframes](https://github.com/daghersirene/DrinkMixer#wireframes)
3. [User Stories](https://github.com/daghersirene/DrinkMixer#user-stories)
4. [Use Cases](https://github.com/daghersirene/DrinkMixer#use-cases)
5. [UML](https://github.com/daghersirene/DrinkMixer#use-cases)
6. [Requirements](https://github.com/daghersirene/DrinkMixer#requirements-table)
7. [ERD](https://github.com/daghersirene/DrinkMixer/blob/main/README.md#erd)
8. [Class UML](https://github.com/daghersirene/DrinkMixer/blob/main/README.md#class-uml)
9. [Data Access Layer](https://github.com/daghersirene/DrinkMixer/edit/main/README.md#data-access-layer)

## Overview
DrinkMixer is a web application that helps users create drinks based on the ingredients they have on hand. Users select ingredients from a list and then the app generates a list of cocktail recipes that they can browse and save to their favorites. Each recipe includes measurements, ingredients, and serving size. 

## Wireframes
 
 Wireframes: https://github.com/daghersirene/DrinkMixer/tree/main/images
 
## User Stories

1. As a busy professional,
I want a cocktail recipe that uses things I have on hand,
so that I can enjoy a cocktail without spending time sourcing alternative ingredients.

1. As a beginner bartender,
I want simple and clear instructions,
so that I can easily practice making drinks.

3. As a drink enthusiast, 
I want to save my favorite cocktail recipes,
so that I can conventiently access them at any time.

4. As a home bartender,
I want to find cocktail recipes using common pantry ingredients,
so that I can prepare drinks quickly.

5. As a drink enthusiast,
I want to see a simple interface with high quality images of drinks,
so that I will be inspired to discover new drinks and try new recipes.

## Use-Cases

**Use Case 1: Viewing saved recipes**
**Basic Flow:** 
   * A user visits the DrinkMixer app with the intention of finding a drink recipe they have enjoyed previously.
   * The user logs in with their username and password.
   * The user selects to view their favorite recipes.
   * The user browses a list of recipes that have saved in the past.
   * The user uses filters to narrow the number of items in the list if the list is excessively long.          

**Use Case 2: Selecting a recipe**
**Basic Flow:** 
   * A user visits the DrinkMixer app and logs in with their username and password.
   * The user picks ingredients from a drop down.
   * The user searches for recipes after selecting ingredients.
   * A list of cocktails is generated based on the input criteria.
   * The user uses filters to narrow the number of items in the list if it is excessively long.
   * The user clicks on the desired cocktails.
   * The user can view detailed information and instructionns for each recipe.

**Use Case 3: Browsing recipes**
**Basic Flow:** 
   * A user visits the DrinkMixer app and logs in with their username and password.
   * The user selects the option to browse recipes.
   * The user selects filtering options, such as liquor type or skill level.
   * The user clicks on the desired recipe.
   * The user can view detailed information and instructions for each recipe.
   * If the user does not like any of the recipes, they can generate a new list to find ones they like.

**Use Case 4: Saving recipes**
**Basic Flow:** 
   * A user visits the DrinkMixer app and logs in with their username and password.
   * The user selects the option to browse recipes.
   * The user selects filtering options, such as liquor type or skill level, to narrow down the selection.
   * The user clicks on the desired recipe to view additional information.
   * The user selects to save the recipe to their favorites to access later.

**Use Case 5: Finding recipes**
**Basic Flow:** 
   * A user visits the DrinkMixer app and logs in with their username and password.
   * The user selects the ingredients they have on hand.
   * The user generates a list of cocktails, from which they can choose a recipe.
   * The user chooses to narrow down the search by adding more ingredients.
   * The user selects a few more ingredients and edits the previously selected ingredients.
   * The user generates more cocktails.

## UML Use-Case Diagram

<img src="https://user-images.githubusercontent.com/55363120/216876186-9eec20c6-d325-48f7-9738-c4f9ee172ed1.jpg" width="600px">


## Requirements Table

| ID | Requirement |
| --- | ----------- |
| 1 | The app will allow users search for cocktail recipes by ingredient and other criteria |
| 2 | The app will allow users to save recipes to revisit at any time  |
| 3 | The app will allow users to view detailed recipes and background information about different cocktails |
| 4 | The app will allow users to filter recipes by category, name, and difficulty |
| 5 | The app will allow users to create an account that is password protected |

## ERD

<img src="https://user-images.githubusercontent.com/55363120/223000119-b05c581f-7055-4d73-8ccd-d845f6a145b9.png" width="600px">

## Class UML

<img src="https://user-images.githubusercontent.com/55363120/223013549-bd0807d2-44b0-4842-92ab-ea30ba2f67d8.png" width="600px">

## Data Access Layer

**Data model/controller:**

![image](https://user-images.githubusercontent.com/55363120/229396485-6fc9b636-0374-4660-bf36-60b0d4aa14e5.png)

**Data from get request:**

![image](https://user-images.githubusercontent.com/55363120/229396543-360d9711-c238-49dd-97e4-f1dc6f39501b.png)


