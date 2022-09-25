const theme = createTheme({
  components: {
    // Name of the component
    Toolbar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
        },
      },
    },
  },
});
