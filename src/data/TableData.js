export const tableColumns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "progress",
    label: "PROGRESS",
    render: (value) => `${value}%`,
  },
  {
    key: "quantity",
    label: "QUANTITY",
  },
  {
    key: "date",
    label: "DATE",
  },
];

export const tableData = [
  {
    id: 1,
    name: "Marketplace",
    progress: 75.5,
    quantity: 2458,
    date: "Apr 26, 2022",
  },
  {
    id: 2,
    name: "Venus DB PRO",
    progress: 35.4,
    quantity: 1485,
    date: "Jul 20, 2022",
  },
  {
    id: 3,
    name: "Venus DS",
    progress: 25,
    quantity: 1024,
    date: "Sep 30, 2022",
  },
  {
    id: 4,
    name: "Venus 3D Asset",
    progress: 100,
    quantity: 858,
    date: "Oct 24, 2022",
  },
  {
    id: 5,
    name: "Marketplace",
    progress: 75.5,
    quantity: 258,
    date: "Nov 29, 2022",
  },
];

export const ordersColumns = [
  { key: "product", label: "PRODUCT" },
  { key: "price", label: "PRICE" },
  { key: "status", label: "STATUS" },
  { key: "date", label: "DATE" },
];

export const ordersData = [
  {
    id: 1,
    product: "iPhone 14",
    price: "$999",
    status: "Delivered",
    date: "Jan 12, 2023",
  },
  {
    id: 2,
    product: "MacBook Air",
    price: "$1299",
    status: "Pending",
    date: "Feb 05, 2023",
  },
  {
    id: 3,
    product: "AirPods Pro",
    price: "$249",
    status: "Cancelled",
    date: "Mar 18, 2023",
  },
  {
    id: 4,
    product: "Apple Watch",
    price: "$399",
    status: "Delivered",
    date: "Apr 02, 2023",
  },
];

export const projectColumns = [
  {
    key: "select",
    label: "",
    type: "checkbox",
  },
  { key: "project", label: "PROJECT" },
  {
    key: "progress",
    label: "PROGRESS",
    render: (value) => `${value}%`,
  },
  { key: "status", label: "STATUS" },
];

export const projectData = [
  { id: 1, project: "Dashboard UI", progress: 80, status: "In Progress" },
  { id: 2, project: "E-commerce App", progress: 45, status: "Pending" },
  { id: 3, project: "Portfolio Website", progress: 100, status: "Completed" },
  { id: 4, project: "Admin Panel", progress: 60, status: "In Progress" },
];

export const usersColumns = [
  {
    key: "select",
    label: "",
    type: "checkbox",
  },
  { key: "name", label: "NAME" },
  { key: "email", label: "EMAIL" },
  { key: "role", label: "ROLE" },
];

export const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Sarah Smith", email: "sarah@example.com", role: "Editor" },
  { id: 3, name: "Mike Ross", email: "mike@example.com", role: "User" },
  { id: 4, name: "Emma Watson", email: "emma@example.com", role: "Admin" },
  { id: 5, name: "David Miller", email: "david@example.com", role: "User" },
];

export const creatorsColumns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "artworks",
    label: "ARTWORKS",
  },
  {
    key: "rating",
    label: "RATING",
    type: "progress", // custom type for bar
  },
];

export const creatorsData = [
  {
    id: 1,
    name: "@maddison_c21",
    artworks: 9821,
    rating: 4.8,
  },
  {
    id: 2,
    name: "@karl.will02",
    artworks: 7032,
    rating: 4.5,
  },
  {
    id: 3,
    name: "@andreea.lz",
    artworks: 5204,
    rating: 4.6,
  },
  {
    id: 4,
    name: "@abraham47.y",
    artworks: 4309,
    rating: 4.4,
  },
  {
    id: 5,
    name: "@simmmple.web",
    artworks: 3871,
    rating: 4.7,
  },
];

export const transactionsColumns = [
  { key: "id", label: "TXN ID" },
  { key: "user", label: "USER" },
  { key: "date", label: "DATE" },
  { key: "amount", label: "AMOUNT" },
];

export const transactionsData = [
  {
    id: "#TXN1021",
    user: "John Doe",
    date: "24 Mar 2026",
    amount: "$120.00",
  },
  {
    id: "#TXN1022",
    user: "Sarah Smith",
    date: "23 Mar 2026",
    amount: "$75.50",
  },
  {
    id: "#TXN1023",
    user: "Mike Ross",
    date: "22 Mar 2026",
    amount: "$220.10",
  },
  {
    id: "#TXN1024",
    user: "Emma Watson",
    date: "21 Mar 2026",
    amount: "$99.99",
  },
  {
    id: "#TXN1025",
    user: "David Miller",
    date: "20 Mar 2026",
    amount: "$45.00",
  },
];
