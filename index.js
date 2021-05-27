import {ApolloServer, gql} from 'apollo-server';
import pg from 'pg';
import {typeDefs} from './typeDefs/typeDefs.js';
import {resolvers} from './resolvers/resolvers.js';


const server=new ApolloServer({ 
    typeDefs,
    resolvers,
    context:({req,res})=>{
        return {req:req,res:res}
    }
});

server.listen({port:4000}).then(res=>{
    console.log(`server runing at port ${res.url}`)
})