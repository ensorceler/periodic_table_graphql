import pg from 'pg';
import fs from 'fs';
import data from './second_table.json';

const pool=new pg.Pool({
    user:'postgres',
    host:'localhost',
    password:'postgres',
    database:'melon',
    port:'5432'
});

export const resolvers={    
     Element:{
        shells:(parent,_,context)=>{
            return data[parent.atomic_number].shells;   
        },
        ionization_energies:(parent,_,context)=>{
            return data[parent.atomic_number].ionization_energies;
        }
    } ,
    Query:{
        getAllElements:async ()=>{
            try{
              const res= await pool.query("SELECT * FROM periodic_table;");
              return res.rows;        
            }catch(err){
                   throw new Error(err); 
            }
       } ,
       getRadioactiveElements:async ()=>{
           try{
              const res= await pool.query("SELECT * FROM periodic_table WHERE radioactive='yes';");
              return res.rows;        
           }catch(err){
               throw new Error(err);
           }
       },
       getElementsByType:async (_,{type})=>{           
           try{
              const res= await pool.query("SELECT * FROM periodic_table WHERE type=$1;",[type]);
              return res.rows;        
           }catch(err){
               throw new Error(err);
           }
       }
       ,
       getElementsByPeriod:async (_,{period})=>{
           try{
              const res= await pool.query("SELECT * FROM periodic_table WHERE period=$1;",[period]);
              return res.rows;        
           }catch(err){
               throw new Error(err);
           }
       }
    }


}