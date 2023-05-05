# Dog App

Welcome to the Dog App! This app allows users to view a list of dogs, add new dogs to the list, edit existing dogs, and delete dogs from the list.

## Installation

To install the Dog App, please follow these steps:

1. Clone this repository to your local machine.
2. Run `bundle install` and `npm install --prefix client` to install all required dependencies.
3. Run `rails db:migrate` to migrate the database schema.
4. Run `rails db:seed` to seed the database with some initial data.
5. Run `rails server` to start the Rails server.
6. Run `npm start --prefix client` to start the frontend server

## Usage

To use the Dog App, simply open your web browser and navigate to `http://localhost:3000`. You will be taken to the home page, where you can view a list of dogs.

To add a new dog, click on the "Add Dog" button. You will be taken to a form where you can enter the dog's name, breed, and image URL. Click the "Submit" button to add the dog to the list.

To edit an existing dog, click on the dog's name. You will be taken to a form where you can edit the dog's name, breed, and image URL. Click the "Save Changes" button to update the dog's information.

To delete a dog, click on the dog's name. You will be taken to a confirmation page where you can confirm that you want to delete the dog. Click the "Delete" button to remove the dog from the list.