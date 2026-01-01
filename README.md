🏗️ Architecture Overview
The project is split into three main components:

Frontend (React): A modern UI built with React and Tailwind CSS for donors and claimants.

User-Service (Spring Boot): Handles authentication, registration, and user profiles.

Food-Service (Spring Boot): Manages food listings, donations, and claims.

📡 Communication (RMI)
The services communicate using Java RMI (Remote Method Invocation).

User-Service acts as the RMI Server.

Food-Service acts as the RMI Client to verify user details before processing donations.
