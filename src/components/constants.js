const fields = [
    { name: "Name", size: 6 },
    { name: "Email", size: 6 },
    { name: "Phone", size: 6 },
    { name: "Age", size: 6 },
  ];
const headings=["Age 1-18","Age 19-25","Age 25-45","Age 45+"]
  const phoneRegex = RegExp(/^[6-9]\d{9}$/);
  export { fields,phoneRegex, headings};