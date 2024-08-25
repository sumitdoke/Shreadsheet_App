# **Spreadsheet App**

A web-based spreadsheet application built with **Next.js**, **Tailwind CSS**, and **Zustand** for state management. This project demonstrates advanced frontend development skills, including state management, responsive design, and UI/UX best practices.

## **Features**

- **Grid Rendering**: A grid of 1000 editable cells.
- **Cell Editing**: Cells can be edited with dynamic content updates.
- **Cell Formatting**: Options for text alignment and font size.
- **Data Validation**: Basic validation rules for certain cells.
- **Search and Filter**: Easily locate specific data within the grid.
- **Pagination/Infinite Scrolling**: Efficient handling of large datasets.
- **Undo/Redo**: Revert changes made to the cells.
- **Responsive Design**: Fully responsive and functional across different devices.

## **Technologies Used**

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Language**: TypeScript
- **Testing**: [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## **Setup Instructions**

### **Prerequisites**

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### **Installation**

1. **Clone the repository** (if available) or create the project from scratch.

   
```bash
   git clone https://github.com/your-username/spreadsheet-app.git
   cd spreadsheet-app
  

2. **Install dependencies**:

   npm install


   Using yarn:

   
bash
   yarn install
  

3. **Run the development server**:

   Using npm:

   
bash
   npm run dev
  

   Using yarn:

   
bash
   yarn dev
  

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### **Building for Production**

1. **Build the application**:

   
bash
   npm run build
  

2. **Start the production server**:

   
bash
Edit Cells 

3. **Deploy to Vercel** (optional):

   
bash
   npm install -g vercel
   vercel
  

## **Usage Instructions**

1. **Edit Cells**: Double-click any cell in the grid to edit its content. Press "Enter" to save or click outside the cell.
2. **Cell Formatting**: Use the toolbar (if implemented) to adjust text alignment and font size.
3. **Search and Filter**: Enter text in the search bar to filter the grid content.
4. **Undo/Redo**: Use "Ctrl+Z" to undo and "Ctrl+Y" to redo changes.
5. **Pagination/Scrolling**: Navigate through large datasets with pagination controls or infinite scrolling.

## **Testing**

### **Run Tests**

To run tests, use the following command:

bash
npm run test

### **Test Structure**

- **Unit Tests**: Tests for individual components and logic.
- **Integration Tests**: Tests to verify the interaction between components.

## **Deployment**

This application can be deployed to platforms like Vercel, Netlify, or any hosting service that supports Node.js applications.

### **Deploying to Vercel**

1. **Install Vercel CLI**:

   
bash
   npm install -g vercel
  

2. **Deploy the application**:

   
bash
   vercel
  

3. Follow the prompts to configure and deploy your application. After deployment, Vercel will provide a live URL for your app.

## Contributing

If you’d like to contribute to this project, feel free to submit a pull request or report issues. Contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
`
