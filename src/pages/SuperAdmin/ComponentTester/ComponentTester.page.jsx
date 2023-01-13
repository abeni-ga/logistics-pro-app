// import {
//   FormControl,
//   InputAdornment,
//   MenuItem,
//   Select,
//   TextField,
//   styled,
//   Radio,
//   Typography,
// } from "@mui/material";
// import { useState } from "react";
// import { color } from "../../../constants/Theme.js";
// import SearchIcon from "@mui/icons-material/Search";
// import EarningTable from "../../../components/Earning/EarningTable.component";
// const ComponentTester = () => {
//   const [action, setAction] = useState("export");
//   const [size, setSize] = useState(7);
//   const [dateSelector, setDateSelector] = useState("today");
//   const handleDateSelection = (event) => {
//     setDateSelector(event.target.value);
//   };
//   const SearchBox = styled(TextField)(() => ({
//     "& fieldset": {
//       borderRadius: "10px",
//     },
//   }));
//   return (
//     <div className="flex flex-col items-end w-full h-full">
//       <div className="flex w-[90%] h-[20%]">
//         <div className="w-[20%] flex flex-col gap-4">
//           <Typography
//             sx={{
//               fontFamily: "Roboto",
//               fontWeight: "700",
//               fontSize: "36px",
//               color: color.darkGray,
//             }}
//           >
//             Reports
//           </Typography>
//           <FormControl
//             sx={{
//               width: "90%",
//               border: "0",
//             }}
//           >
//             <Select
//               id="size"
//               value={size}
//               sx={{
//                 backgroundColor: "white",
//                 borderRadius: "10px",
//                 borderColor: "white",
//               }}
//               onChange={(e) => {
//                 setSize(e.target.value);
//               }}
//             >
//               <MenuItem default value="transaction">
//                 Transaction
//               </MenuItem>
//             </Select>
//           </FormControl>
//         </div>
//         <div className="w-[50%]">
//           <div className="flex">
//             <div></div>
//             <div>
//               <Typography></Typography>
//               <Typography></Typography>
//             </div>
//           </div>
//           <div>
//             <div></div>
//             <div></div>
//           </div>
//           <div>
//             <div></div>
//             <div></div>
//           </div>
//           <div>
//             <div></div>
//             <div></div>
//           </div>
//         </div>
//       </div>
//       <div className="flex w-[90%] h-full">
//         <div className="w-[70%] bg-slate-200"></div>
//         <div className="w-[30%] h-full bg-slate-400"></div>
//       </div>
//     </div>
//   );
// };

// export default ComponentTester;

// <div className="flex items-center gap-4 w-[45%]">

//   <FormControl sx={{ m: 1, width: "20%" }}>
//     <Select
//       sx={{ backgroundColor: "white", borderRadius: "10px" }}
//       id="quantity"
//       value={action}
//       placeholder="show"
//       label=""
//       onChange={(e) => {
//         setAction(e.target.value);
//       }}
//     >
//       <MenuItem value={"export"}>Export</MenuItem>
//     </Select>
//   </FormControl>
//   <SearchBox
//     sx={{
//       backgroundColor: "white",
//       width: "40%",
//       borderRadius: "10px",
//     }}
//     variant="outlined"
//     placeholder="search company here"
//     InputProps={{
//       startAdornment: (
//         <InputAdornment position="start">
//           <SearchIcon />
//         </InputAdornment>
//       ),
//     }}
//   />
// </div>;
