Build a simulation of a claims entry system in NodeJS/JavaScript:


Create a class in JavaScript for the Insured that includes properties for first name, last
name, and e-mail address

Create a class in JavaScript for Vehicle that includes properties for year, make, and
model

Create a class in JavaScript for InsuranceClaim that includes properties for date of claim,
claim number, description, an Insured reference, a Vehicle reference, and a flag for
whether or not the claim is approved

Create a simple web page for user input:
▪ Inputs for the insured information
▪ Inputs for the vehicle information
▪ Inputs for the claim details – date of claim, claim number, description, and
whether or not the claim is approved
▪ Include a “Submit” button that simulates submission of the claim information to
back-end systems

On submission, route to a simple page that displays a summary of the claim detail with a
link for returning “home” (for entry of new claim)
You can use Express combined with Handlebars (see demo code) for routing and UI
Add HTML validation attributes to your UI to enforce valid inputs – NOTE: claim
description is optional
Host the application in a Docker container and test from a browser