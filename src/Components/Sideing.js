import React from 'react'
import Raw from '../record.json'
import CloseIcon from '@mui/icons-material/Close';
import SaveAltTwoToneIcon from '@mui/icons-material/SaveAltTwoTone';
import SaveAsTwoToneIcon from '@mui/icons-material/SaveAsTwoTone';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import DownloadIcon from '@mui/icons-material/Download';

const Sideing = () => {
  return (
    <div className='RigDev' >
      <span className="FloWK">
        Workflow
        <span style={{color:"#013873", marginLeft: "43px", color: "#df2ca6" }}>
          <span> <CloseIcon /> </span>
          <span><SaveAltTwoToneIcon /></span>
          <span><SaveAsTwoToneIcon /></span>
          <span>    <DownloadIcon /></span>
          <span><DirectionsRunIcon /></span>
          <span><EventRepeatIcon /></span>
        </span>
      </span>
      
      <hr style={{ border: '0', height: '2px', backgroundColor: 'black', width: '100%'}}/>

      {Raw && Raw.length > 0 && (
        <div style={{ display: "grid", gridGap: "0", marginLeft: "10px" }}>
 
          {Raw[0].workflow_steps.map((header, index) => {
            if (header.name === 'join') {
              return (
                <>
                  <React.Fragment key={index}> 
                    
                    <div style={{ gridColumn: "span 2", marginTop: "20px", border: "1px solid black", padding: "10px 10px 0 10px", borderRadius: "5px 5px 0 0", position: "relative",backgroundColor:"#003063",color:"white" }}>
                    
                      <h6>{header.name_title}</h6> 
                    </div>
                    <div style={{ border: "1px solid black", borderTop: "none", padding: "10px 10px 0 10px", borderRadius: "5px 5px 5px 5px", width: "282px" }}>
                      <div style={{ display: "flex", flexDirection: "column", backgroundColor: '#f2f5f8' }}>
                         
                           Type: {header.params_extra.type}
                        
                        <div>
                           Left Columns:
                          <div>
                            {header.params_extra.left_columns.map((column, i) => (
                              <div key={i}>{column}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                           Right Columns:
                          <div>
                            {header.params_extra.right_columns.map((column, i) => (
                              <div key={i}>{column}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                               Dataset2 Name: {header.params_extra.dataset2_name}
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                </>
              );
            } else if (header.name === 'de_dupe') {
              return (
                <React.Fragment key={index}>
                  <div style={{ gridColumn: "span 2", marginTop: "10px", border: "1px solid black", padding: "10px 10px 0 10px", borderRadius: "5px 5px 0 0", position: "relative",backgroundColor:"#003063",color:"white"  }}>
                    
                     <h6>{header.name_title}</h6> 
                  </div>
                  <div style={{ border: "1px solid black", borderTop: "none", padding: "10px", borderRadius: "0 0 5px 5px",backgroundColor: '#f2f5f8' }}>
                  Columns:
                    <div>
                      {header.params_extra.columns.map((column, i) => (
                        <div key={i}>{column}</div>
                      ))}
                    </div>
                  </div>
                </React.Fragment>
              );
            } else if (header.name === 'aggregate') {
              return (
                <React.Fragment key={index}>
                  <div style={{ gridColumn: "span 2", marginTop: "10px", border: "1px solid black", padding: "10px 10px 0 10px", borderRadius: "5px 5px 0 0", position: "relative",backgroundColor:"#003063",color:"white"  }}>
                    
                      <h6>{header.name_title}</h6> 
                  </div>
                  <div style={{ border: "1px solid black", borderTop: "none", padding: "10px", borderRadius: "0 0 5px 5px",backgroundColor: '#f2f5f8' }}>
                    <div style={{ gridColumn: "span 2" }}>
                     Aggregation Type: {header.params_extra.agg_type.join(", ")}
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                      Dimension Columns:{header.params_extra.dim_cols.map((dim, i) => (
                          <div key={i}>{dim}</div>
                        ))}
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                      
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                      Fork Name: {header.params_extra.fork_name}
                    </div>
                  </div>
                </React.Fragment>
              );
            } else if (header.name === 'select_dataset') {
              return (
                <React.Fragment key={index}>
                  <div style={{ gridColumn: "span 2", marginTop: "10px", border: "1px solid black", padding: "10px 10px 0 10px", borderRadius: "5px 5px 0 0", position: "relative",backgroundColor:"#003063",color:"white" }}>
                    
                    <h6>{header.name_title}</h6>  
                  </div>
                  <div style={{ border: "1px solid black", borderTop: "none", backgroundColor: '#f2f5f8 ', padding: "10px", borderRadius: "0 0 5px 5px"}}>
                    <span>name: {header.params_extra.name}</span> 
                  </div>
                </React.Fragment>
              );
            } else if (header.name === 'new') {
              return (
                <React.Fragment key={index}>
                  <div style={{ gridColumn: "span 2", marginTop: "10px", border: "1px solid black", padding: "10px 10px 0 10px", borderRadius: "5px 5px 0 0", position: "relative",backgroundColor:"#003063",color:"white"}}>
                    
                     <h6>{header.name_title}</h6> 
                  </div>
                  <div style={{ border: "1px solid black", borderTop: "none",backgroundColor: '#f2f5f8', padding: "10px", borderRadius: "0 0 5px 5px" }}>
                    <div style={{ gridColumn: "span 2" }}>
                      name: {header.params_extra.expression}
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                      name: {header.params_extra.column_name}
                    </div>
                  </div>
                </React.Fragment>
              );
            } else if (header.name === 'clean') {
              return (
                <React.Fragment key={index}>
                  <div style={{ gridColumn: "span 2", marginTop: "10px", border: "1px solid black", padding: "10px 10px 0 10px", borderRadius: "5px 5px 0 0", position: "relative",backgroundColor:"#003063",color:"white"}}>
                    
                        <h6>{header.name_title}</h6> 
                  </div>
                  <div style={{ border: "1px solid black", borderTop: "none",backgroundColor: '#f2f5f8', padding: "10px", borderRadius: "0 0 5px 5px" }}>
                    <div style={{ gridColumn: "span 2" }}>
                     Columns: {header.params_extra.columns.map((column, i) => (
                          <span key={i}>{column}</span>
                        ))}
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                    Clean Type: {header.params_extra.clean_type}
                    </div>
                  </div>
                </React.Fragment>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  )
}

export default Sideing









