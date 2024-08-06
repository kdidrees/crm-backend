const path = require('path');
const {importLeadsFromExcel} = require('../utils/importLeads');


const uploadFile =  async(req,res)=>{
   try {
    const filePath = path.join(__dirname, '../', req.file.path);
    await importLeadsFromExcel(filePath)
   } catch (error) {
    
   }
}   