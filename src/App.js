import './App.css';
import Maining from './Components/Maining.js'
import Sideing from './Components/Sideing.js'
import './App.css'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import StorageIcon from '@mui/icons-material/Storage';
import FilterVintageSharpIcon from '@mui/icons-material/FilterVintageSharp';



function App() {
  return (
    <div className="App" style={{ backgroundColor: '#e7eaf5' }}>
      <div>

        {/* upper portion Data Summary Logs */}
        <div className='flexcon' style={{ borderRadius: "5px 5px 5px 5px" }}>
          <div style={{ color: "#48027b " }}> <SettingsRoundedIcon style={{ fontSize: 24, color: "#8016f4" }} />Data</div>
          <div style={{ color: "#48027b " }}> <SignalCellularAltIcon style={{ fontSize: 24, color: "#8016f4" }} />Summary</div>
          <div style={{ color: "#48027b " }}><EventNoteTwoToneIcon style={{ fontSize: 24, color: "#8016f4" }} />Logs</div>
        </div>

        <div className='semi'>
          <div className='divLef' style={{ marginRight: '52px' }}>

            {/* Editing for Project Name output portion */}
            <div className='spell'>
              <div style={{ border: '1px solid black', display: 'inline-block', backgroundColor: "#f2e8fd", color: "#ad6af7", padding: '2px', marginRight: '10px', padding: "6px", borderRadius: "5px 5px 5px 5px" }}>
                <FilterVintageSharpIcon style={{ fontSize: 17 }} />  PROJECT NAME
              </div>
              <span style={{ marginRight: '10px' }}>ETL DEMO</span>

              <div style={{ border: '1px solid black', display: 'inline-block', backgroundColor: "#f2e8fd", color: "#ad6af7", padding: '2px', marginRight: '10px', padding: "6px", borderRadius: "5px 5px 5px 5px" }}>
                <StorageIcon style={{ fontSize: 17 }} /> OUTPUT DATASET NAME
              </div>
              <span style={{ marginRight: '18px', display: 'inline-block' }}>
                ETL N 2
              </span>

              <div style={{ border: '1px solid black', display: 'inline-block', backgroundColor: "#f2e8fd", color: "#ad6af7", padding: '2px', marginRight: '10px', padding: "6px", borderRadius: "5px 5px 5px 5px" }}>
                LAST RUN
              </div>
              <span style={{ marginRight: '160px' }}>Not Available</span>
              <span > Rows:500 </span>
            </div>

            <hr style={{ border: '0', height: '2px', backgroundColor: 'black', width: '100%' }} />

            {/* For table inside left block */}
            <div className='TabIn' style={{ marginLeft: '5px' }}>
              <div className="meno" style={{ borderRadius: "15px 12px 15px 15px" }}>
                <Maining />
              </div>
            </div>

          </div>

          <div>
            <Sideing />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
