# iDHL Technical Test

This project has been created for the iDHL Technical Test. This test is for a fictional pet brand who require a responsive landing page with add to bag functionality. When the "add to bag" button is clicked, a cart slides out from the right.


## Tech Stack

- HTML5
- JavaScript
- SASS
- Webpack


## Prerequisites

To run this project, please make sure you have the following installed:

### Required
- Node.js (v14 or higher)
- npm
- A modern web browser

### Optional
- Git (if you want to clone rather than download the project)
- A code IDE

You can check your Node.js and npm versions by running:
```bash
node --version
npm --version
```

## Run Locally

Clone the project

```bash
git clone https://github.com/reokwebdev/idhl-technical-test.git
```

Go to the project directory

```bash
cd idhl-technical-test
```

Install dependencies

```bash
npm install
```

### Development Mode

For development, you'll need to run two commands in separate terminal windows:

Terminal 1 - Run webpack to watch and compile JavaScript:
```bash
npm run dev
```

Terminal 2 - Run SASS compiler to watch and compile styles:
```bash
npm run sass
```

This setup ensures both webpack and SASS watchers run reliably and you can see the output from each process clearly.

### Production Build

To build for production:

```bash
npm run build
```

### Important Notes
- Both webpack and SASS watchers will automatically recompile when you make changes
- Open `index.html` in your browser to view the project
- Changes to JavaScript files in `src/js/` will trigger webpack rebuild
- Changes to SCSS files in `src/scss/` will trigger SASS recompilation