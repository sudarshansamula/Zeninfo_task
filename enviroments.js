
let fs = require('fs');

const getEnvironments =  async (req,res,next) => {
  let file_path=`./${req.params.process}/env.json`
  let jsonData =await JSON.parse(fs.readFileSync(file_path, 'utf-8'))
  res.json(jsonData)
};
const setEnvironments =  async (req,res,next) => {
  let file_path=`./${req.params.process}/env.json`;
  let dataObj={};
  const key=req.params.key;
  const value=req.params.value;
  dataObj[req.params.process]={key:value};
  let data=JSON.stringify(dataObj);
  fs.writeFile(file_path, data, (err) => {
    if (err){
      if(err.code == 'ENOENT'){
        fs.mkdir(`./${req.params.process}`, { recursive: true }, (err) => {
          fs.writeFile(file_path, data, (err) => {
            if (err){console.log("Error inside created folder",err)}
          });
        });
      }
    } 
    console.log('Data written to file');
    res.json(dataObj)
  });
};
module.exports= {
  getEnvironments,
  setEnvironments
}


