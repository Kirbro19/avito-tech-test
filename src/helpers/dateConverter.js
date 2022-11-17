const dateConverter = (unixDate) => {
    let newDate = new Date(unixDate * 1000).toLocaleString();
    return newDate;
  }
  export default dateConverter;