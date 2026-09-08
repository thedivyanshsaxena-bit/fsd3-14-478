import http from "http";
//import * as teams from 'teams.js';
import { getAllTeams,addTeam } from "./teams.js";
import {parse as parseUrl} from "url"; 

const PORT=5000;

const sendJson=(res,statusCode,data)=>{
  res.writeHead(statusCode,{"content-type":"application/JSON"});
  res.end(data==="undefined"?"" :JSON.stringify(data));
};

const parseJSONBody=(req)=>{
  new Promise((resolve,reject)=>{
    let body=''
    req.on("data",(chunk)=>{
      body+=chunk.toString();
      console.log(body);
    });
    req.on("end",()=>{
      try{
        resolve(body?JSON.parse(body):{});        
      }catch(error){
        reject(error);
      }
    });
  });
};

const server=http.createServer(async(req,res)=>{
  const { pathname,query } =parseUrl(req.url,true);
  console.log('pathname:',pathname);
  console.log('query:',query)
  console.log("method:",method);

  if(pathname==='/api/v1/teams' && method==='GET'){
    let teams=getAllTeams();
    return sendJson(res,200,teams);
  }else if(pathname==="/api/v1/teams" && method=="POST"){
    const {tname,tltl,members}=await parseJSONBody(req);
    if(!tname||!tl||!members){
      
    }
    addTeam(newTeam);
    return sendJson(res,201,team);
  }
   else{
    res.statusCode=404;
    res.end();
  }
})

/*const server = http.createServer((req, res) => {

  if(req.url==='/'&& req.method=='GET'){
    const teams=teams.getAllTeams();
    res.write(JSON.stringify(teams));
  }
  else{
    res.statusCode=404;
  }
  res.end();
 
});*/

/*server.on('request',(req,res)=>{
    res.write("<h1>Welcome To Server Side Programming</h1>");
    res.write("<h2>Nodemon is tracking the files</h2>");
    res.end();
});*/
server.listen(PORT, () => {
  console.log(" SIH Server Is Running at ",PORT);
});
