
```markdown
# Tech Eagle Race Simulation

This project simulates a race track where participants (represented by SVG icons) move based on their speed and time. The application is built using React.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Customization](#customization)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd Tech-Eagle-Assignment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## Usage

- **Home Page (`/`):**
  - Add participants by providing their name, speed, and start time.
  - View the list of participants with their details.
  - Click "Start Race" to navigate to the race track.

- **Race Track (`/race-track`):**
  - Observe the progress of participants in real-time.
  - The counter indicates the elapsed time.
  - The race ends when all participants reach a distance of 400 meters.

- **Modal Component (`/components/Modal.jsx):**
  - Displays the race results, including participant positions, names, speeds, start times, and end times.
  - Provides options to restart the race or go back to the home page.

## Components

### 1. Home Page (`src/pages/Home.jsx`):

   - Allows users to add participants and view the list.

### 2. Race Track (`src/pages/RaceTrack.jsx`):

   - Simulates the race track and updates participant progress in real-time.

### 3. Modal Component (`src/components/Modal.jsx`):

   - Displays race results and options to restart or go back.

### 4. Person SVG Component (`src/components/Person.jsx`):

   - SVG representation of a person, used to visualize participants.


