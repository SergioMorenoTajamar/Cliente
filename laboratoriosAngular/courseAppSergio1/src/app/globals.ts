declare global {
  interface CustomWindow extends Window {
    appRef: any; // Ajusta el tipo según corresponda
    model: any; // Ajusta el tipo según corresponda
  }
}
