console.log(
  process.argv.reduce((acc, curr) => {
    if (/\d/.test(curr)) {
      return (acc += Number(curr));
    }
    return 0;
  }, 0)
);
