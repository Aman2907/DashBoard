import React ,{ useEffect, useState } from 'react'
import data from '../record.json'
import '../App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




function Maining() {
 
  return ( 
    <>
    <div> 
      <table className='table  '>   
        <tbody> { 
         <tr>
            { 
             data && data.length > 0 && ( 
             <table className='table table-hover table-bordered table-responsive-xl'>
              <thead>
                <tr >
                 {data[0].table_headers.map((header, index) => (
                  <th key={index} style={{  backgroundColor: '#f2f5f8 '}} >
                   {header.name} 
                   <DeleteIcon style={{color:"#6575a9",left:"20px", marginLeft:"43px"}}/>
                  </th>
                  ))}
                </tr>

               <tr style={{textAlign:"center"}}>
                 {data[0].table_headers.map((header, index) => (
                   <th style={{  backgroundColor: '#f2f5f8'}} key={index}>{header.type} <KeyboardArrowDownIcon style={{left:"20px"}}/></th>
                  ))}  
               </tr> 
              </thead>

              <tbody>
                 {data[0].table_data.map((row, rowIndex) => (
                    <tr  key={rowIndex}>
                       {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                  ))}
              </tbody>
            </table>
            )
            }
          </tr>
          }
       </tbody>
     </table>
    </div>
    </>
   
  )
}

export default Maining













//  data && data.length > 0 && (
//     <table>
//       <thead>
//         <tr>
//           <th>Header Name</th>
//           <th>Type</th>
//           <th>Data</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((val, index) => (
//           <React.Fragment key={index}>
//             {val.table_headers && val.table_headers.length > 0 ? (
//               val.table_headers.map((headerItem, headerIndex) => (
//                 <tr key={headerIndex}>
//                   <th>{headerItem.name}</th>
//                   <th>{headerItem.type}</th>
//                   {headerIndex === 0 && (
//                     <td rowSpan={val.table_headers.length}>
//                       <table>
//                         <tbody>
//                           {val.table_data && val.table_data.length > 0 ? (
//                             val.table_data.map((dataItem, dataIndex) => (
//                               <tr key={dataIndex}>
//                                 <td>{dataItem}</td>
//                               </tr>
//                             ))
//                           ) : (
//                             <tr>
//                               <td>NO</td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </td>
//                   )}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={3}>NO</td>
//               </tr>
//             )}
//           </React.Fragment>
//         ))}
//       </tbody>
//     </table>
//   ) 



  
//   {
//     <tr>
//        {
//         data && data.length > 0 && (
//          <table>
//            <tbody>
//              {data.map((val, index) => (
//                 <tr key={index}>
//                  {val.table_headers && val.table_headers.length > 0 ? (
//                    val.table_headers.map((funcItem, funcIndex) => (
//                        <td key={funcIndex}>{funcItem.name}</td>
                       
//                     ))
//                    ) : (
//                    <td>NO</td>
//                   )}
//                </tr>
//               ))}
//            </tbody>
//          </table>
//       )
//     }
//   </tr>
// }